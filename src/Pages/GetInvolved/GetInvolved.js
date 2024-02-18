import React from "react";
import "./GetInvolved.css"
import Map from "../../Components/Map/Map";

function GetInvolved() {
    return (
      <div id="GetInvolvedContainer">
        <h1>This is Get Involved</h1>
        <div className="map-container">
          <Map />
        </div>
      </div>
    );
  }
  
export default GetInvolved;