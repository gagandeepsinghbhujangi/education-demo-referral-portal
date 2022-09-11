import React, { useEffect, useState } from "react";
import $ from "jquery";
import PropTypes from "prop-types";
import { AddReferralFormCss } from "./ReferralForm";
import theme from "../../../config/theme/theme.json";
import {
  getLeadIdFromCookie,
  getProspectNameFromCookie,
} from "../../../authentication/utility";

/* global lsq_setupForm */

const Form = ({ lsqFormConfig, btnText, handleOnSuccess }) => {
  const {
    formId,
    lsqAppUrl,
    lsqApiServiceUrl,
    lsqAuthKey,
    lsqFormUrl,
    injectExtraValues,
  } = lsqFormConfig;

  const [state, setState] = useState(false);

  const injectValuesOnFormLoad = () => {
    try {
      const injectValueInID = (id, value) => {
        if (!value) {
          window.location.href = "/";
          return;
        }

        document.getElementById(id).value = value;
      };
      if (injectExtraValues && injectExtraValues.length > 0) {
        injectExtraValues.map((field, index) => {
          const key = Object.keys(field)[0];
          let value = field[key];
          if (index === 0 && value === "") {
            value = getLeadIdFromCookie();
          } else if (index === 1 && value === "") {
            value = getProspectNameFromCookie();
          }
          injectValueInID(key, value);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loadOverrideCSS = () => {
    injectValuesOnFormLoad();

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
    } catch (error) {
      console.log(error);
    }
  };

  const onLSQFormSubmissionSuccess = () => {
    setTimeout(() => {
      handleOnSuccess();
      setState(!state);
    }, 3000);
  };

  const onLSQFormLoadError = (e) => {
    console.log(e);
    window.location.href = "/";
  };

  const onLSQFormSaveFailure = (e) => {
    console.log(e);
    window.location.href = "/";
  };

  useEffect(() => {
    $.getScript(lsqFormUrl)
      .done(function () {
        lsq_setupForm({
          id: formId,
          templateName: "Number",
          themeOptions: {
            primaryButtonColor: theme.colors.primary, //theme color
          },
        });
      })
      .fail(function () {
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
  }, [state]);
  return (
    <>
      <AddReferralFormCss />
      <div className='formParentWrapper formTranferWrapper add-ref-form'>
        <div
          id='lsq-form-modal'
          data-form-id={formId}
          ref={(elem) => (window.lsqFormContainer = elem)}
          className='modal-v4 fullscreen external lsq-external-form-container'>
          <div className='lsq-external-shimmer-container'>
            <div className='shimmer-body'>
              <div className='shimmer-field'>
                <shimmerinput className='shimmer-shine'></shimmerinput>
                <shimmerlabel className='shimmer-shine'></shimmerlabel>
              </div>
              <div className='shimmer-field'>
                <shimmerinput className='shimmer-shine'></shimmerinput>
                <shimmerlabel className='shimmer-shine'></shimmerlabel>
              </div>
              <div className='shimmer-field'>
                <shimmerinput className='shimmer-shine'></shimmerinput>
                <shimmerlabel className='shimmer-shine'></shimmerlabel>
              </div>
              <div className='shimmer-field'>
                <shimmerinput className='shimmer-shine'></shimmerinput>
                <shimmerlabel className='shimmer-shine'></shimmerlabel>
              </div>
            </div>
          </div>
          <div className='lsq-form-container-wrapper'></div>
          <div className='lsq-form-hidden-fields'>
            <input
              id='lsq-authKey'
              name='lsq-authKey'
              type='hidden'
              value={lsqAuthKey}
            />
            <input
              id='lsq-api-service-url'
              name='lsq-api-service-url'
              type='hidden'
              value={lsqApiServiceUrl}
            />
            <input
              id='lsq-app-url'
              name='lsq-app-url'
              type='hidden'
              value={lsqAppUrl}
            />
            <input
              id='lsq-form-id-hidden'
              name='lsq-form-id-hidden'
              type='hidden'
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
  handleOnSuccess: null,
};

Form.propTypes = {
  lsqFormConfig: PropTypes.object.isRequired,
  handleOnSuccess: PropTypes.func.isRequired,
};
export default Form;
