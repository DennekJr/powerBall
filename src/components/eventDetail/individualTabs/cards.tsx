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
  player1: string;
  // player2: string;
  // player3: string;
  // player4: string;
  // player5: string;
  // player6: string;
  // player7: string;
  // player8: string;
  // icons: object;
};

export const Teams = ({ player1 }: Event) => {
  return (
    <div className="teamsContainer">
        <Cell col={3}>
          <Card
            shadow={1}
            style={{
              width: "150px",
              height: "220px",
              borderRadius: "20px",
              background: "#20132a",
            }}
          >
            <CardTitle
              expand
              style={{
                color: "#fff",
              }}
            >
              <h5>{player1}</h5>
            </CardTitle>
            {/*<CardText>{icons}</CardText>*/}
          </Card>
        </Cell>
    </div>
  );
};
