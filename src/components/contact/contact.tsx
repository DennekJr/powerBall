import React from "react";
import "./contact.styles.css";

export const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contactPhrase">
        <p>Drop a line if you're interested in joining</p>
        <hr />
      </div>
      <div className="contactHeader">
        <h3>Get In Touch</h3>
        <hr />
      </div>
      <div className="contactForm">
        <form className="form">
          <div className="nameFields">
            <div className="inputContainer">
              <input
                type="text"
                placeholder="First Name"
                className="contactFormInput"
              />
            </div>
            <div className="inputContainer">
              <input
                type="text"
                placeholder="Last Name"
                className="contactFormInput"
              />
            </div>
            <div className="inputContainer">
              <input
                type="email"
                placeholder="Email"
                className="contactFormInput"
              />
            </div>
          </div>
          <div className="nameFields" style={{ marginTop: "50px" }}>
            <div className="textFieldInputContainer">
              <textarea
                placeholder="Your message"
                className="contactFormInput"
              />
            </div>
          </div>
          <div className="submitButtonContainer" style={{ marginTop: "50px" }}>
            <div className="submitButton">SEND</div>
          </div>
        </form>
      </div>
    </div>
  );
};
