import { API_GET_LEAD_DETAILS_BY_ID } from "../api";

class RewardsService {
  getRewards = (leadId, callBack) => {
    if (leadId) {
      API_GET_LEAD_DETAILS_BY_ID({
        params: {
          id: leadId,
        },
      })
        .then(function (res) {
          if (res && res.data) {
            const { message } = res.data;

            if (message && message.length > 0) {
              const count = message[0].mx_My_Rewards || 0;
              callBack(count);
            } else {
              callBack(0);
            }
          } else {
            callBack(0);
          }
        })
        .catch(function (error) {
          console.log(error, "error");
          callBack(0);
        });
    }
  };
}

export default RewardsService;
