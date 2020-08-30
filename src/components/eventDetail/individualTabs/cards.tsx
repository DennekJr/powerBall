import React from "react";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
} from "react-mdl";
import "./individualTabs.styles.css";

type Event = {
  title: string;
  icons: object;
};

export const Teams = ({ title, icons }: Event) => {
  return (
    <div className="teamsContainer">
        <Cell col={3}>
          <Card
            shadow={0}
            style={{ width: "250px", height: "320px", borderRadius: '20px', background: '#20132a' }}
          >
            <CardTitle
              expand
              style={{
                color: "#fff",
                background:
                  "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC",
              }}
            >
              {title}
            </CardTitle>
            <CardText>{icons}</CardText>
            <CardActions border style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
              <i className="fa fa-twitter" style={{color: "white"}}/>
              <i className="fa fa-youtube" style={{color: "white"}}/>
              <i className="fa fa-twitch" style={{color: "white"}}/>
            </CardActions>
          </Card>
        </Cell>
    </div>
  );
};
