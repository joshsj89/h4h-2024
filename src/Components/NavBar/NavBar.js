import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import AccountPopup from '../SignInPopup/AccountPopup'
import LogOutButton from "../LogOutButton/LogOutButton";

function NavBar ({userID, isLoggedIn}){

    const [popupIsOpen, setPopupIsOpen] = useState(false);

    function openAccountPopup() {
        setPopupIsOpen(true);
        console.log(isLoggedIn);
    }

    function closeAccountPopup() {
        setPopupIsOpen(false);
    }

    return(
        <div id="NavBar">
            {/* this syntax is weird. You only need to look at what is returned, that's what will go here. */}
            {(()=> {
                if(isLoggedIn) {
                    return (<p>Hello User#{userID}</p>)
                } else {
                    return <></>
                }
            })()}

            <Link to="/">Home</Link>
            <Link to="about">About</Link>
            <Link to="get-involved">Get Involved</Link>
            <Link to="merchandise">Merchandise</Link>

            {(()=> {
                if(isLoggedIn) {
                    return (<LogOutButton></LogOutButton>)
                } else {
                    return (<button onClick={openAccountPopup}> Sign Up (or Log In)</button>)
                }
            })()}
            <AccountPopup isOpen={popupIsOpen} closeAccountPopup={closeAccountPopup}></AccountPopup>
        </div>
    )
}

export default NavBar;
