import React from "react";
import "./eventList.styles.css";
import { IndividualEvent } from "./individualEvents";
import {  useTranslation } from "react-i18next";

export const EventList = () => {
    const { t } = useTranslation();
  return (
    <div className="eventDetailContainer">
      <div className="eventDetailHome">
        <div className="vertical" />
        <div className="homeText">
          <h5>
            <span>{t('home2')}</span> / {t('sidebar')}
          </h5>
          <h2>{t('sidebar')}</h2>
        </div>
      </div>
      <div className="eventDetailBody" id="eventListBody">
        <IndividualEvent
          image="https://media.altchar.com/prod/images/940_530/gm-13f0f1bb-b35f-4be3-858e-125a438d496a-fortnites6shadowform.jpeg"
          date={t('date')}
          title={t('title')}
          description={t('description')}
        />
      </div>
    </div>
  );
};
