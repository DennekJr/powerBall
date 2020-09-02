import React from "react";
import "./eventDetail.styles.css";
import { Details } from "./details";
import { TabsNavigation } from "./tabNavigation";
import { Teams } from "./individualTabs/cards";
import { EventSpecifics } from "./eventDetailRefurbished/eventSpecifics";
import {
  TournamentDetails,
  TournamentDetails2,
} from "./eventDetailRefurbished/tournamentDetails";

export const EventDetail = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#20132a",
        flexDirection: "column",
        paddingBottom: "200px",
      }}
    >
      <div className="eventDetailBanner">
        <Details
          image="https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/tour-img-1.png"
          gameTitle="MADRID OPEN"
        />
      </div>
      <div className="eventDetailBody">
        <EventSpecifics
          gameDay="25th august 2020"
          gameLocation="MADRID"
          gameMode="5V5"
          gameName="FIFA 20"
          gamePlatform="PC"
          gamePlayers="4 GROUPS"
          gamePrice="280K"
          gameTime="15:00"
        />
        <TournamentDetails
          about="ABOUT THE TOURNAMENT"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
        />
        <TabsNavigation />
        <TournamentDetails2 meeting="MEET THE TEAMS" />
        <div style={{ display: "flex", overflow: 'scroll', flexDirection: 'column' }}>
          <Teams icons={<i className="fa fa-boy" />}  player1="ACEU" player2="DALTOOSH" player3="DENNEKJR" player4="GUIN"/>
          <Teams icons={<i className="fa fa-boy" />}  player1="DUKE" player2="BOLO" player3="STANJHAE" player4="UNKNOWN"/>
        </div>
      </div>
    </div>
  );
};
