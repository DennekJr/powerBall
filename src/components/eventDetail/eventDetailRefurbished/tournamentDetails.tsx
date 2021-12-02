import React from "react";
import "./eventDetailsRefurbished.styles.css";

type Event = {
  about: string;
  description: string;
};

type Event2 = {
  meeting: string;
};

export const TournamentDetails = ({ about, description }: Event) => {
  return (
    <div className="aboutDescription">
      <div className="verticalLineAbout">
        <div className="vertical1" />
        <div
          style={{
            fontSize: "28px",
            fontWeight: 700,
            fontFamily: "Rajdhani",
            color: "white",
          }}
          className="about"
        >
          {about}
        </div>
      </div>
      <div className="eventDescriptionText">{description}</div>
    </div>
  );
};

export const TournamentDetails2 = ({ meeting }: Event2) => {
  return (
    <div className="aboutDescription" style={{ marginTop: "45px" }}>
      <div className="verticalLineAbout">
        <div className="vertical1" />
        <div
          style={{
            fontSize: "28px",
            fontWeight: 700,
            fontFamily: "Rajdhani",
            color: "white",
          }}
        >
          {meeting}
        </div>
      </div>
    </div>
  );
};
