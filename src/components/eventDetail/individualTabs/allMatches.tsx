import React from "react";
import { Chip, ChipContact } from "react-mdl";
import "./individualTabs.styles.css";

type Event = {
  name1: string;
  name2: string;
  score1: string;
  score2: string;
  date: string;
};

export const AllMatches = ({ name1, name2, score1, score2, date }: Event) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="allMatchesContainer">
        <Chip
            className="nameCards"
        >
          <ChipContact
            style={{
              background: 'url("https://placekitten.com/150/150") 0 0 / cover',
            }}
          />
          <h1>{name1}</h1>
        </Chip>
        <div
          style={{
            width: "25%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <h1 style={{ fontSize: "60px" }}>{score1}</h1>
            <span style={{ fontSize: "60px" }}>:</span>
          <h1 style={{ fontSize: "60px" }}>{score2}</h1>
        </div>
        <Chip
            className="nameCards"
        >
          <ChipContact
            style={{
              background: 'url("https://placekitten.com/150/150") 0 0 / cover',
            }}
          />
          <h1>{name2}</h1>
        </Chip>
      </div>
      <div>
        <h5 className="date">{date}</h5>
      </div>
    </div>
  );
};
