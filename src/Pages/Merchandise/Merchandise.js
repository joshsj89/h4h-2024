import React, {useState} from "react";
import "./Merchandise.css";
import ColorSelector from "./formElements/colorSelector";
import { Color } from "three";
import SizeSelector from "./formElements/sizeSelector";
import NumberSelector from "./formElements/numberSelector";
import { shaderFunctions } from "three-mesh-bvh";
import TeamNameSelector from "./formElements/teamNameSelector";
import BlueShirtImage from "../../Images/blue-shirt.png";
import BlackShirtImage from "../../Images/black-shirt.png";
import RedShirtImage from "../../Images/red-shirt.png";
import loadingSpinner from "../../Images/spinner.png";
import axios from "axios";

import { NavLink } from "react-router-dom";

const possibleColors = [
  "#161616",
  "#341A20",
  "#25497E",
]

const possibleSizes = [
  "S",
  "M",
  "L",
  "XL",
]

const tShirtMap = {
  "#161616" : BlackShirtImage,
  "#341A20" : RedShirtImage,
  "#25497E" : BlueShirtImage,
}

const colorNames = {
  "#161616" : "Dark Black",
  "#341A20" : "Dark Maroon",
  "#25497E" : "Royal Blue",
}

const flavorText = [
  "Generating the perfect logo",
  "Generating the perfect logo.",
  "Generating the perfect logo..",
  "Generating the perfect logo...",
  "Asking DALL-E nicely",
  "Asking DALL-E nicely.",
  "Asking DALL-E nicely..",
  "Asking DALL-E nicely...",
  "Adding Finishing Touches",
  "Adding Finishing Touches.",
  "Adding Finishing Touches..",
]

function Merchandise() {

  const [color, setColor] = useState("#25497E");
  const [size, setSize] = useState("");
  const [number, setNumber] = useState(0);
  const [teamName, setTeamName] = useState("");
  const [formProgress, setFormProgress] = useState(0);
  const [imgURL, setImgURL] = useState("");
  const [loadingProgress, setLoadingProgress] = useState(0);
  // color
  // size
  // number
  // team name

  const [selectorPosition, setSelectorPosition] = useState("0vw");
  const [fontWeights, setFontWeights] = useState(["bold", "normal"])
  const [isComplete, setIsComplete] = useState(false);


  function enableDownload() {
    setIsComplete(true);
  }

  function selectGraphicType(name) {
    if(name === "T-Shirt") {
      setSelectorPosition("0vw");
      setFontWeights(["bold", "normal"])
    } else if (name === "Chair") {
      setSelectorPosition("7.5vw");
      setFontWeights(["normal", "bold"])
    }
  }

    return (
      <div id="MerchandiseContainer">
        <div id="graphic-type-selector-container">
          <div id="selected-type" onClick={() => {selectGraphicType("T-Shirt")}}>
            <p style={{fontWeight:fontWeights[0], transition: "font-weight 0.5s ease-in-out"}}>T-Shirt</p>
          </div>
          <div id="unselected-type" onClick={() => {selectGraphicType("Chair")}}>
            <p style={{fontWeight:fontWeights[1], transition: "font-weight 0.5s ease-in-out"}}>Chair</p>
          </div>
          <div id="selected-icon" style={{left:selectorPosition}}></div>
        </div>
        <div id="form-container">
          <div id="back-container" onClick={() => {setFormProgress(formProgress-1)}}>
            {(formProgress !== 0) ? <><img src="https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png" style={{height: "5vh", padding: "2vh 0vw 0vh 1vw"}}></img>
            <p style={{paddingTop: "2vh"}}>Back</p></> : <></>}

          </div>
          <div id="current-form-container">
            <ColorSelector colors={possibleColors} setColor={setColor} selectedColor={color} formProgress={formProgress}></ColorSelector>
            <SizeSelector sizes={possibleSizes} setSize={setSize} selectedSize={size} formProgress={formProgress}></SizeSelector>
            <NumberSelector setNumber={setNumber} formProgress={formProgress}></NumberSelector>
            <TeamNameSelector setTeamName={setTeamName} formProgress={formProgress}></TeamNameSelector>
          </div>
          {isComplete ? <a href={imgURL} download="logo.png" target="_blank">
          <p style={{fontSize:"1rem", cursor:"pointer", position: "absolute", bottom:"10px", left: "10px"}}>Love this logo?<br></br> <strong>Download it!</strong></p>
          </a> : <></>}
          <div id="next-button-container">
            <div onClick={() => {if(formProgress < 3) {
              setFormProgress(formProgress + 1)
            } else {
              const timer = setInterval(() => {
                setLoadingProgress(loadingProgress => loadingProgress + 1);
              }, 10)
              axios.get(`http://localhost:3890/generate-image/${teamName}/${colorNames[color]}/`)
              .then((response) => {
                console.log(response.data);
                setImgURL(response.data);
                clearInterval(timer);
                setLoadingProgress(0);
                enableDownload();
              })
              .catch((error) => {
                console.error(error);
              });
            }}}
            id="next-button" style={{width:((formProgress !== 3) ? "60px" : "150px")}}>{(formProgress === 3) ? "Generate Image" : "Next"}</div>
          </div>
        </div>
        <div id="graphic-view-container">
          {(loadingProgress > 0) ? <div id="loading-container">
            <img id="loading-spinner" src={loadingSpinner}></img>
            <p id="flavor-text">{flavorText[Math.floor(loadingProgress / 900 * 11)]}</p>
            <div id="progress-bar" style={{width: `${((loadingProgress / 900) * 100)}%`}}></div>
          </div> : <></>}
          <div id="t-shirt-view-container">
            <img id="t-shirt-image" src={tShirtMap[color]}></img>
          </div>
          <img id="t-shirt-logo" src={imgURL}></img>
          {number !== 0 ? <p style={{position: "fixed", top:"35%", left: "72%", color: "white", fontWeight: "bold", fontSize: "1.5rem"}}>{number}</p> : <></>}
          {teamName !== "" ? <p style={{position: "fixed", top:"65%", left: "62%", color: "white", fontWeight: "bold", fontSize: "1.5rem"}}>{teamName}</p> : <></>}
          <div id="chair-view-container">

          </div>
          {isComplete ? <div style={{position: "fixed", bottom: "2vh", right: "2vh", backgroundColor: "white", padding: "20px", borderRadius: "10px"}}><NavLink class="NaviLink" to="/checkout">Checkout</NavLink></div> : <></>}


        </div>
      </div>
    );
  }

export default Merchandise;
