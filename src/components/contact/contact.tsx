import React from "react";
import "./contact.styles.css";
import { useTranslation } from "react-i18next";


export const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="contactContainer">
      <div className="contactPhrase">
        <p>{t('contactHeader')}</p>
        <hr />
      </div>
      <div className="contactHeader">
        <h3>{t('contactSubHeader')}</h3>
        <hr />
      </div>
      <div className="contactForm">
        <form className="form">
          <div className="nameFields">
            <div className="inputContainer">
              <input
                type="text"
                placeholder={t('placeholder.firstName')}
                className="contactFormInput"
              />
            </div>
            <div className="inputContainer">
              <input
                type="text"
                placeholder={t('placeholder.lastName')}
                className="contactFormInput"
              />
            </div>
            <div className="inputContainer">
              <input
                type="email"
                placeholder={t('placeholder.email')}
                className="contactFormInput"
              />
            </div>
          </div>
          <div className="nameFields" style={{ marginTop: "50px" }}>
            <div className="textFieldInputContainer">
              <textarea
                placeholder={t('placeholder.message')}
                className="contactFormInput"
              />
            </div>
          </div>
          <div className="submitButtonContainer" style={{ marginTop: "50px" }}>
            <div className="submitButton">{t('sendButton')}</div>
          </div>
        </form>
      </div>
    </div>
  );
};
