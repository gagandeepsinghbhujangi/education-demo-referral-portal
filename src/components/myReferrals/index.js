import { useEffect, useState } from "react";
import Header from "../header";
import Content from "./content";
import { useNavigate } from "react-router";

import { API_GET_TOKEN, API_GET_DASHBOARD_REPORT } from "../../api";
import { getLeadIdFromCookie } from "../../authentication/utility";
import AddReferralConfig from "../../config/component/addReferralConfig";

import "../../styles/globalStyles.css";
import totalLeads from "../../assets/images/myReferral/totalLeads.png";
import signedUp from "../../assets/images/myReferral/signedUp.png";
import applicationInitiated from "../../assets/images/myReferral/applicationInitiated.png";
import applicationSubmitted from "../../assets/images/myReferral/applicationSubmitted.png";
import paymentCompleted from "../../assets/images/myReferral/paymentCompleted.png";
import leadsEnrolled from "../../assets/images/myReferral/leadsEnrolled.png";
import SpinnerLoader from "../spinnerLoader";
import dashboardConfig from "../../config/component/dashboardConfig";
import theme from "../../config/theme/theme.json";

const MyReferrals = ({ headerProps, contentProps, isLoader }) => {
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const { reportCardKeys, bucketArr } = dashboardConfig;

  const getObjectKeyValue = (buckets, dataKey) => {
    const countData = buckets.filter((d) => d.key === dataKey)[0];
    return countData ? countData.doc_count : 0;
  };

  const getAllCounts = () => {
    const leadId = getLeadIdFromCookie();

    if (!leadId) {
      window.location.href = "/";
      return;
    }

    // api to find token
    API_GET_TOKEN()
      .then((response) => {
        const { message } = response?.data;

        const payload = {
          AuthenticationModel: {
            AuthToken: message,
          },
          Query: {
            query: {
              constant_score: {
                filter: {
                  bool: {
                    must: [
                      {
                        term: {
                          mx_Referral_Lead: leadId,
                        },
                      },
                    ],
                  },
                },
              },
            },
            aggs: {
              mx_Application_Stage: {
                terms: {
                  field: "mx_Application_Stage",
                },
              },
            },
            from: 0,
            size: 0,
          },
          Mapping: "lead",
          ResponseFormat: "json",
        };
        // dashboard report api call
        API_GET_DASHBOARD_REPORT(payload)
          .then(async (response) => {
            const { buckets } =
              response?.data?.message?.aggregations?.mx_Application_Stage;

            const appInitiatedCount = getObjectKeyValue(
              buckets,
              reportCardKeys.appInitiated
            );
            const appSubmittedCount = getObjectKeyValue(
              buckets,
              reportCardKeys.appSubmitted
            );
            const paymentCompletedCount = getObjectKeyValue(
              buckets,
              reportCardKeys.paymentCompleted
            );
            const appEnrolledCount = getObjectKeyValue(
              buckets,
              reportCardKeys.appEnrolled
            );
            const signedUpCount = getObjectKeyValue(
              buckets,
              reportCardKeys.signedUp
            );
            const totalLeadsCount = response?.data?.message?.hits?.total || 0;

            if (totalLeadsCount === 0) {
              navigate("/dashboard");
            }
            // To show the all lead status in card
            setCardData([
              {
                name: bucketArr[0],
                value: totalLeadsCount,
                icon: totalLeads,
                textColor: theme.dashboardsCard.card1.count,
                boxColor: theme.dashboardsCard.card1.background,
              },
              {
                name: bucketArr[1],
                value: signedUpCount,
                icon: signedUp,
                textColor: theme.dashboardsCard.card2.count,
                boxColor: theme.dashboardsCard.card2.background,
              },
              {
                name: bucketArr[2],
                value: appInitiatedCount,
                icon: applicationInitiated,
                textColor: theme.dashboardsCard.card3.count,
                boxColor: theme.dashboardsCard.card3.background,
              },
              {
                name: bucketArr[3],
                value: appSubmittedCount,
                icon: applicationSubmitted,
                textColor: theme.dashboardsCard.card4.count,
                boxColor: theme.dashboardsCard.card4.background,
              },
              {
                name: bucketArr[4],
                value: paymentCompletedCount,
                icon: paymentCompleted,
                textColor: theme.dashboardsCard.card5.count,
                boxColor: theme.dashboardsCard.card5.background,
              },
              {
                name: bucketArr[5],
                value: appEnrolledCount,
                icon: leadsEnrolled,
                textColor: theme.dashboardsCard.card6.count,
                boxColor: theme.dashboardsCard.card6.background,
              },
            ]);
          })
          .catch(function (error) {
            console.error(error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    getAllCounts();
  }, []);

  return (
    <>
      <Header {...headerProps} />

      {isLoading ? (
        isLoader && <SpinnerLoader /> // To show/hide the spinner loader at loading dashboard page
      ) : (
        <Content
          {...contentProps}
          cardData={cardData}
          getAllCounts={getAllCounts}
          config={dashboardConfig}
        />
      )}
    </>
  );
};

export default MyReferrals;
