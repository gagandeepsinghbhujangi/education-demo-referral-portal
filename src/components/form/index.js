import React, { Component, useEffect, useState } from "react";
import $ from "jquery";
import PropTypes from "prop-types";
import { SignUpCss } from "./SignUpCss";
import { useNavigate } from "react-router";
import theme from "../../config/theme/theme.json";

/* global lsq_setupForm */

const Form = ({
  lsqFormConfig,
  btnText,
  injectValuesOnFormLoad,
  injectValues = false,
}) => {
  const navigate = useNavigate();
  const { formId, lsqAppUrl, lsqApiServiceUrl, lsqAuthKey, lsqFormUrl } =
    lsqFormConfig;

  const [state, setState] = useState(null);

  const loadOverrideCSS = () => {
    if (injectValues) {
      injectValuesOnFormLoad();
    }

    // Changing the button Text
    try {
      const submitButton = window.lsqFormContainer.querySelector(
        ".lsq-form-action-btn"
      );
      document
        .getElementsByClassName("lsq-form-theme-footer")[0]
        .style.setProperty("padding", "0", "important");
      document
        .getElementsByClassName("lsq-form-theme-footer")[0]
        .style.setProperty("margin", "0", "important");
      if (submitButton) {
        submitButton.textContent = btnText;
        submitButton.addEventListener("click", () => {
          window.scrollTo(0, 0);
        });
      }
      setState({ fullScreenLoader: false });
    } catch (error) {
      console.log(error);
    }
  };

  const onLSQFormSubmissionSuccess = (e) => {
    window.lsqFormContainer.querySelector(".ms-message-txt").textContent =
      "Account Created Successfully. You can login now";
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const onLSQFormLoadError = (e) => {
    console.log("onLSQFormLoadError:", e);
    // window.location.href = "/";
  };

  const onLSQFormSaveFailure = (e) => {
    console.log("onLSQFormSaveFailure", e);
    // window.location.href = "/";
  };

  useEffect(() => {
    $.getScript(lsqFormUrl)
      .done(function (data) {
        lsq_setupForm({
          id: formId,
          templateName: "Number",
          themeOptions: {
            primaryButtonColor: theme.colors.primary, //theme color
          },
        });
        setState({ fullScreenLoader: false });
      })
      .fail(function (error) {
        window.location.href = "/";
      });
    if (window.lsqFormContainer) {
      window.lsqFormContainer.addEventListener(
        "lsqformloadcomplete",
        loadOverrideCSS
      );
      window.lsqFormContainer.addEventListener(
        "lsqformsubmissionsuccess",
        onLSQFormSubmissionSuccess
      );
      window.lsqFormContainer.addEventListener(
        "LsqFormSaveFailure",
        onLSQFormSaveFailure
      );
      window.lsqFormContainer.addEventListener(
        "LSQFormLoadError",
        onLSQFormLoadError
      );
    }
  }, []);
  return (
    <>
      <SignUpCss />
      <div className="formParentWrapper formTranferWrapper">
        <div
          id="lsq-form-modal"
          data-form-id={formId}
          ref={(elem) => (window.lsqFormContainer = elem)}
          className="modal-v4 fullscreen external lsq-external-form-container"
        >
          <div className="lsq-external-shimmer-container">
            <div className="shimmer-body">
              <div className="shimmer-field">
                <shimmerinput className="shimmer-shine"></shimmerinput>
                <shimmerlabel className="shimmer-shine"></shimmerlabel>
              </div>
              <div className="shimmer-field">
                <shimmerinput className="shimmer-shine"></shimmerinput>
                <shimmerlabel className="shimmer-shine"></shimmerlabel>
              </div>
              <div className="shimmer-field">
                <shimmerinput className="shimmer-shine"></shimmerinput>
                <shimmerlabel className="shimmer-shine"></shimmerlabel>
              </div>
              <div className="shimmer-field">
                <shimmerinput className="shimmer-shine"></shimmerinput>
                <shimmerlabel className="shimmer-shine"></shimmerlabel>
              </div>
            </div>
          </div>
          <div className="lsq-form-container-wrapper"></div>
          <div className="lsq-form-hidden-fields">
            <input
              id="lsq-authKey"
              name="lsq-authKey"
              type="hidden"
              value={lsqAuthKey}
            />
            <input
              id="lsq-api-service-url"
              name="lsq-api-service-url"
              type="hidden"
              value={lsqApiServiceUrl}
            />
            <input
              id="lsq-app-url"
              name="lsq-app-url"
              type="hidden"
              value={lsqAppUrl}
            />
            <input
              id="lsq-form-id-hidden"
              name="lsq-form-id-hidden"
              type="hidden"
              value={formId}
            />
          </div>
        </div>
      </div>
    </>
  );
};

Form.defaultProps = {
  lsqFormConfig: null,
};

Form.propTypes = {
  lsqFormConfig: PropTypes.object.isRequired,
};
export default Form;
