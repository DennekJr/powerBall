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
import { useTranslation } from "react-i18next";

export const EventDetail = () => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#000000",
        flexDirection: "column",
      }}
    >
      <div className="eventDetailBanner">{/*<Details />*/}</div>
      <div className="eventDetailBody">
        <EventSpecifics
          gameDay={t('gameDay')}
          gameLocation="MADRID"
          gameMode="5V5"
          gameName="FIFA 20"
          gamePlatform="PC"
          gamePlayers={t('gamePlayers')}
          gamePrice="280K"
          gameTime="15:00"
        />
        <TournamentDetails
          about={t('about')}
          description={t('description')}
        />
        <TabsNavigation />
        <TournamentDetails2 meeting={t('tournamentDetails.meeting')} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingBottom: "200px",
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
      {/*<MainFooter />*/}
    </div>
  );
};
