import React from "react";
import {
  Cell,
  Card,
  CardTitle,
} from "react-mdl";
import "./individualTabs.styles.css";

type Event = {
  player1: string;
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
            borderColor: "#20132a",
            borderWidth: "1px",
            borderStyle: "dotted",
              boxShadow: "1px 1px darkred",
            background: "#000",
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
        </Card>
      </Cell>
    </div>
  );
};
