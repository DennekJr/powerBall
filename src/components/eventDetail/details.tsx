import React from "react";
import "./eventDetail.styles.css";

type Event = {
  image: string;
  gameTitle: string;
};

export const Details = ({
  image,
  gameTitle,
}: Event) => {
  return (
    <div className="detailsContainer">
      <img
        src={image}
        alt="gameImage"
        style={{width: '303px', height: '222px'}}
      />
      <h2 className="gameTitle">{gameTitle}</h2>
    </div>
  );
};
