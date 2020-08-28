import React from "react";
import "./eventDetail.styles.css";
import { Details } from "./details";
import { EventQuota } from "./eventQuota";
import { EventDescription } from "./eventDescription";

export const EventDetail = () => {
  return (
    <div>
      <div className="eventDetailBanner">
        <Details
          image="https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/tour-img-1.png"
          gameTitle="MADRID OPEN"
        />
      </div>
      <div style={{ backgroundColor: "#20132a" }}>
        <EventQuota
          gameName="DOTA 2"
          gameDay="25th august 2020 "
          gameTime="/ 15:00 "
          gameLocation="/ MADRID"
          gamePrice="280K"
          gameMode="5v5"
          gamePlatform="PC"
          gamePlayers="4 GROUPS"
        />
        <EventDescription
          title="ABOUT THE TOURNAMENT"
          description="Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget."
        />
      </div>
    </div>
  );
};
