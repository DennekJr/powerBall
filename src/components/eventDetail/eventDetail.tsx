import React from "react";
import "./eventDetail.styles.css";
import { Cards } from "./individualTabs/cards";
import { EventSpecifics } from "./eventDetailRefurbished/eventSpecifics";
import { Grid } from "react-mdl";
import {
  TournamentDetails,
  TournamentDetails2,
} from "./eventDetailRefurbished/tournamentDetails";
import { useTranslation } from "react-i18next";
import {TournamentBracket} from "./tournamentBracket/tournamentBracket";

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
        {/*<TabsNavigation />*/}
        <TournamentBracket />
        <TournamentDetails2 meeting={t('tournamentDetails.meeting')} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingBottom: "200px",
          }}
        >
          <Grid>
            <Cards player1="ACEU" />
            <Cards player1="Daltoosh" />
            <Cards player1="Geass" />
            <Cards player1="Guin" />
            <Cards player1="Odin" />
            <Cards player1="Kronos" />
            <Cards player1="Hal" />
            <Cards player1="Simp" />
            <Cards player1="Ferda" />
            <Cards player1="Virgin" />
          </Grid>
        </div>
      </div>
    </div>
  );
};
