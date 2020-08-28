import React from "react";
import "./eventDetail.styles.css";

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

export const EventQuota = ({
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
    <div>
      <div className="eventQuotaContainer">
        <div
          style={{ fontSize: "25px", fontFamily: "Rajdhani", fontWeight: 700, color: 'white' }}
        >
          <i className="fa fa-star" />
          {gameName}
        </div>
        <div className="gameTime">
          {gameDay}
          {gameTime}
          {gameLocation}
        </div>
        {/*Game type specifics*/}

        <div className="gameTypeDetail">
          <div className="gameSector">
            <div className="game">
              <i
                className="fa fa-money"
                style={{
                  padding: "0 8px 0 0",
                  color: "#6b54b6",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              />
              {gamePrice}
            </div>
            <div>
              <p className="gameTime">PRIZE POOL</p>
            </div>
          </div>
          <div className="gameSector">
            <div className="game">
            <i
                className="fa fa-gamepad"
                style={{
                  padding: "0 8px 0 0",
                  color: "#6b54b6",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              />
              {gameMode}
            </div>
            <div>
              <p className="gameTime">GAME MODE</p>
            </div>
          </div>
          <div className="gameSector">
            <div className="game">
            <i
                className="fa fa-terminal"
                style={{
                  padding: "0 8px 0 0",
                  color: "#6b54b6",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              />
              {gamePlatform}
            </div>
            <div>
              <p className="gameTime">PLATFORM</p>
            </div>
          </div>
          <div className="gameSector">
            <div className="game">
            <i
                className="fa fa-group"
                style={{
                  padding: "0 8px 0 0",
                  color: "#6b54b6",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              />
              {gamePlayers}
            </div>
            <div>
              <p className="gameTime">PLAYERS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
