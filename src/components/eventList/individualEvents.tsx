import React from "react";
import "./eventList.styles.css";
import {  useTranslation } from "react-i18next";


type Event = {
  image: string;
  date: string;
  title: string;
  description: string;
};

export const IndividualEvent = ({
  image,
  date,
  title,
  description,
}: Event) => {
  const { t } = useTranslation();
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
            {date}
          </h6>
        </div>
        <h3>{title}</h3>
        <h5>{description}</h5>
        <a style={{cursor: 'pointer'}} href="/EventDetail">
          {t('more')} <i className="fa fa-arrow-right"/>
        </a>
      </div>
    </div>
  );
};
