import React from 'react';
import './LogOutButton.css';
import { getAuth, signOut } from "firebase/auth";

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
        <button onClick={handleLogout}>Log Out</button>
    )
}

export default LogOutButton;
