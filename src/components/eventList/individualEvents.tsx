import React from "react";
import "./eventList.styles.css";

type Event = {
  image: string;
  by: string;
  date: string;
  title: string;
  news: string;
  description: string;
};

export const IndividualEvent = ({
  image,
  by,
  date,
  title,
  news,
  description,
}: Event) => {
  return (
    <div className="individualEventsContainer">
      <img
        src={image}
        alt="competitionImage"
        style={{ width: "1300px", maxHeight: "500px" }}
      />
      <div className="compDescription">
        <div className="reference">
          <h6>
            By {by}
            <span> /</span>
          </h6>
          <h6>
            {date}
            <span> /</span>
          </h6>
          <h6>{news}</h6>
        </div>
        <h3>{title}</h3>
        <h5>{description}</h5>
        <a>
          Read More <i className="fa fa-arrow-right"/>
        </a>
      </div>
    </div>
  );
};
