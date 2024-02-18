import React from 'react';
import './LogOutButton.css';
import { getAuth, signOut } from "firebase/auth";
import "../NavBar/NavBar.css";

function LogOutButton() {
    const auth = getAuth();

    function handleLogout() {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    return (
        <button id="actionButton" onClick={handleLogout}>Log Out</button>
    )
}

export default LogOutButton;
