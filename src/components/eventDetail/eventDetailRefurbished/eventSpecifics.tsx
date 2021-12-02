import React from "react";
import "./eventDetailsRefurbished.styles.css";
import { useTranslation } from "react-i18next";

type Event = {
  gameName: string;
  gameDay: string;
  gameTime: string;
  gameLocation: string;
  gamePrice: string;
  gameMode: string;
  gamePlatform: string;
  gamePlayers: string;
};

export const EventSpecifics = ({
  gameName,
  gameDay,
  gameTime,
  gameLocation,
  gamePrice,
  gameMode,
  gamePlatform,
  gamePlayers,
}: Event) => {
  const { t } = useTranslation();
  return (
    <div className="eventSpecifics">
      <div className="eventNameDate">
        <div className="eventName">
          <h3>{gameName}</h3>
        </div>
        <div className="eventDate">
          {gameDay}
          <span style={{ margin: "0 10px" }}>/</span>
          {gameTime}
          <span style={{ margin: "0 10px" }}>/</span>
          {gameLocation}
        </div>
      </div>
      <div className="eventType">
        <div className="gamePricePrizePool">
          <div className="gamePrice">
            <i
              className="fa fa-money"
              style={{
                marginRight: "6px",
                fontSize: "17px",
                fontWeight: 500,
                color: "#000",
              }}
            />
            {gamePrice}
          </div>
          <div className="prizePool">{t('prizePool')}</div>
        </div>
        <div className="playMode">
          <div className="gamePrice">
            <i
              className="fa fa-gamepad"
              style={{
                marginRight: "6px",
                fontSize: "17px",
                fontWeight: 500,
                color: "#000",
              }}
            />
            {gameMode}
          </div>
          <div className="prizePool">{t('playModel')}</div>
        </div>
        <div className="platform">
          <div className="gamePrice">
            <i
              className="fa fa-terminal"
              style={{
                marginRight: "6px",
                fontSize: "17px",
                fontWeight: 500,
                color: "#000",
              }}
            />
            {gamePlatform}
          </div>
          <div className="prizePool">{t('platform')}</div>
        </div>
        <div className="players">
          <div className="gamePrice">
            <i
              className="fa fa-group"
              style={{
                marginRight: "6px",
                fontSize: "17px",
                fontWeight: 500,
                color: "#000",
              }}
            />
            {gamePlayers}
          </div>
          <div className="prizePool">{t('player')}</div>
        </div>
      </div>
    </div>
  );
};
