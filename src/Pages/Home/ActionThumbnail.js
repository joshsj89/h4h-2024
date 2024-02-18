import React from "react";
import "./ActionThumbnail.css";
import JerseyLogo from "../../Images/JerseyLogo.png";
import SoccerBallLogo from "../../Images/SoccerBallLogo.png";
import MapLogo from "../../Images/MapLogo.png";
import { Link } from "react-router-dom";
import "../Home/Home.css";

function ActionThumbnail({ title, text }) {
  return (
    <div id="ActionThumbnailContainer">
      <article>
        {title === "MAKE YOUR LOGO" && <img src={JerseyLogo}></img>}
        {title === "WHY POWER SOCCER?" && <img src={SoccerBallLogo}></img>}
        {title === "FIND YOUR TEAM" && <img src={MapLogo}></img>}
        <h2>{title}</h2>
        <div
          style={{ width: "80px", height: "5px", backgroundColor: "#E3DDDD" }}
        ></div>
        <p>{text}</p>
      </article>
      {title === "MAKE YOUR LOGO" && (
        <Link to="merchandise" id="LearnMoreButton">
          MERCH
        </Link>
      )}
      {title === "WHY POWER SOCCER?" && (
        <Link to="about" id="LearnMoreButton">
          ABOUT
        </Link>
      )}
      {title === "FIND YOUR TEAM" && (
        <Link to="get-involved" id="LearnMoreButton">
          GET INVOLVED
        </Link>
      )}
    </div>
  );
}

export default ActionThumbnail;
