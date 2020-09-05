import React from "react";
import "./eventDetailsRefurbished.styles.css";

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
                color: "#624ca6",
              }}
            />
            {gamePrice}
          </div>
          <div className="prizePool">PRIZE POOL</div>
        </div>
        <div className="playMode">
          <div className="gamePrice">
            <i
              className="fa fa-gamepad"
              style={{
                marginRight: "6px",
                fontSize: "17px",
                fontWeight: 500,
                color: "#624ca6",
              }}
            />
            {gameMode}
          </div>
          <div className="prizePool">PLAY MODEL</div>
        </div>
        <div className="platform">
          <div className="gamePrice">
            <i
              className="fa fa-terminal"
              style={{
                marginRight: "6px",
                fontSize: "17px",
                fontWeight: 500,
                color: "#624ca6",
              }}
            />
            {gamePlatform}
          </div>
          <div className="prizePool">PLATFORM</div>
        </div>
        <div className="players">
          <div className="gamePrice">
            <i
              className="fa fa-group"
              style={{
                marginRight: "6px",
                fontSize: "17px",
                fontWeight: 500,
                color: "#624ca6",
              }}
            />
            {gamePlayers}
          </div>
          <div className="prizePool">PLAYERS</div>
        </div>
      </div>
    </div>
  );
};
