import React from "react";
import "./eventList.styles.css";
import { IndividualEvent } from "./individualEvents";

export const EventList = () => {
  return (
    <div className="eventDetailContainer">
      <div className="eventDetailHome">
        <div className="vertical" />
        <div className="homeText">
          <h5>
            <span>HOME</span> / WITHOUT SIDEBAR
          </h5>
          <h2>WITHOUT SIDEBAR</h2>
        </div>
      </div>
      <div className="eventDetailBody">
        <IndividualEvent
          image="https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/blog-img-1.jpg"
          by="Deadre Ayton"
          date="OCTOBER 19, 2020"
          news="News"
          title="WE'VE WON THE KINGS! WOW!"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
        />
        <IndividualEvent
          image="https://media.altchar.com/prod/images/940_530/gm-13f0f1bb-b35f-4be3-858e-125a438d496a-fortnites6shadowform.jpeg"
          by="Bill Kosby"
          date="OCTOBER 19, 2020"
          news="News"
          title="WE'VE WON THE KINGS! WOW!"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
        />
        <IndividualEvent
          image="https://ymcawichita.org/sites/default/files/styles/ffwy_prgf_banner/public/2019-08/adult-competition-concentration-929831.jpg?h=bfa41935&itok=L2jeuCkL"
          by="Kill Billy /"
          date="OCTOBER 19, 2020 /"
          news="News"
          title="WE'VE WON THE KINGS! WOW!"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
        />
      </div>
    </div>
  );
};
