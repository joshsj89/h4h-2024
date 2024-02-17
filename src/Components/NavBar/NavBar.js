import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar (){
    return(
        <div id="NavBar">
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="get-involved">Get Involved</Link>
            <Link to="merchandise">Merchandise</Link>
        </div> 
    )
}

export default NavBar;