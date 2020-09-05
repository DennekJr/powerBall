import React from "react";
import "./eventDetail.styles.css";
import { Details } from "./details";
import { TabsNavigation } from "./tabNavigation";
import { Teams } from "./individualTabs/cards";
import { EventSpecifics } from "./eventDetailRefurbished/eventSpecifics";
import { Grid } from "react-mdl";
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
        <TournamentDetails2 meeting="MEET THE PLAYERS" />
        <div
          style={{
            display: "flex",
            // overflow: "scroll",
            flexDirection: "row",
          }}
        >
          <Grid>
            <Teams player1="ACEU" />
            <Teams player1="Daltoosh" />
            <Teams player1="Daltoosh1" />
            <Teams player1="Daltoosh3" />
            <Teams player1="Daltoosh5" />
            <Teams player1="Daltoosh4" />
            <Teams player1="Daltoosh8" />
            <Teams player1="Daltoosh54" />
            <Teams player1="Daltoosh37" />
            <Teams player1="Daltoosh93" />
          </Grid>
        </div>
      </div>
    </div>
  );
};
