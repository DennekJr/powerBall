import React from "react";
import "./eventDetail.styles.css";
import { Details } from "./details";
import { EventQuota } from "./eventQuota";
import { EventDescription } from "./eventDescription";
import { EventDescription2 } from "./eventDescription";
import {TabsNavigation} from "./tabNavigation";
import {Teams} from "./individualTabs/cards";

export const EventDetail = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#20132a', flexDirection: 'column', paddingBottom: '200px'}}>
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
        <TabsNavigation />
          <EventDescription2
              title="MEET THE TEAMS"
           description="They are"/>
      </div>
        <div style={{ width: '80%'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', overflow: 'scroll'}}>
                <Teams title="Arsenal" icons={<i className="fa fa-boy"/>} />
                <Teams title="Chelsea" icons={<i className="fa fa-boy"/>} />
                <Teams title="Aceu" icons={<i className="fa fa-boy"/>} />
                <Teams title="Daltoosh" icons={<i className="fa fa-boy"/>} />
                <Teams title="pooch" icons={<i className="fa fa-boy"/>} />
                <Teams title="Wigg" icons={<i className="fa fa-boy"/>} />
                <Teams title="DenneJr" icons={<i className="fa fa-boy"/>} />
                <Teams title="O.D" icons={<i className="fa fa-boy"/>} />
            </div>
        </div>

    </div>
  );
};
