import React from "react";
import "./eventDetail.styles.css";

type Event = {
  title: string;
  description: string;
};

export const EventDescription = ({ title, description }: Event) => {
  return (
      <div className="eventDescription">
          <div className="verticalTitle">
              <div className="vertical1" />
              <div style={{fontSize: '35px', fontWeight: 700, fontFamily: "Rajdhani", color: 'white'}}>{title}</div>
          </div>
          <div className="eventDescriptionText">{description}</div>
      </div>
  )
};
export const EventDescription2 = ({ title, description }: Event) => {
  return (
      <div className="eventDescription2">
          <div className="verticalTitle">
              <div className="vertical1" />
              <div style={{fontSize: '35px', fontWeight: 700, fontFamily: "Rajdhani", color: 'white'}}>{title}</div>
          </div>
          <div className="eventDescriptionText">{description}</div>
      </div>
  )
};
