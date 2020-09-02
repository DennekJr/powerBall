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
  player2: string;
  player3: string;
  player4: string;
  icons: object;
};

export const Teams = ({ player1, player2, player3, player4, icons }: Event) => {
  return (
    <div className="teamsContainer">
      <Cell col={3}>
        <Card
          shadow={1}
          style={{
            width: "250px",
            height: "320px",
            borderRadius: "20px",
            background: "#20132a",
          }}
        >
          <CardTitle
            expand
            style={{
              color: "#fff",
              background:
                "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat ",
            }}
          >
            {player1}
          </CardTitle>
          <CardText>{icons}</CardText>
          <CardActions
            border
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <i className="fa fa-twitter" style={{ color: "white" }} />
            <i className="fa fa-facebook" style={{ color: "white" }} />
            <i className="fa fa-instagram" style={{ color: "white" }} />
          </CardActions>
        </Card>
      </Cell>
      <Cell col={3}>
        <Card
          shadow={0}
          style={{
            width: "250px",
            height: "320px",
            borderRadius: "20px",
            background: "#20132a",
          }}
        >
          <CardTitle
            expand
            style={{
              color: "#fff",
              background:
                "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat",
            }}
          >
            {player2}
          </CardTitle>
          <CardText>{icons}</CardText>
          <CardActions
            border
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <i className="fa fa-twitter" style={{ color: "white" }} />
            <i className="fa fa-facebook" style={{ color: "white" }} />
            <i className="fa fa-instagram" style={{ color: "white" }} />
          </CardActions>
        </Card>
      </Cell>
      <Cell col={3}>
        <Card
          shadow={0}
          style={{
            width: "250px",
            height: "320px",
            borderRadius: "20px",
            background: "#20132a",
          }}
        >
          <CardTitle
            expand
            style={{
              color: "#fff",
              background:
                "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat",
            }}
          >
            {player3}
          </CardTitle>
          <CardText>{icons}</CardText>
          <CardActions
            border
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <i className="fa fa-twitter" style={{ color: "white" }} />
            <i className="fa fa-facebook" style={{ color: "white" }} />
            <i className="fa fa-instagram" style={{ color: "white" }} />
          </CardActions>
        </Card>
      </Cell>
      <Cell col={3}>
        <Card
          shadow={0}
          style={{
            width: "250px",
            height: "320px",
            borderRadius: "20px",
            background: "#20132a",
          }}
        >
          <CardTitle
            expand
            style={{
              color: "#fff",
              background:
                "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat",
            }}
          >
            {player4}
          </CardTitle>
          <CardText>{icons}</CardText>
          <CardActions
            border
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <i className="fa fa-twitter" style={{ color: "white" }} />
            <i className="fa fa-facebook" style={{ color: "white" }} />
            <i className="fa fa-instagram" style={{ color: "white" }} />
          </CardActions>
        </Card>
      </Cell>
    </div>
  );
};
