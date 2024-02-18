import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useEffect, useState } from "react";
import USPSALogo from "../../Images/USPSALogo.png";
import { FormNextLink, Menu, Close } from "grommet-icons";
import AccountPopup from '../SignInPopup/AccountPopup'
import LogOutButton from "../LogOutButton/LogOutButton";

function NavBar({userID, isLoggedIn}) {
  const [scrollDown, setScrollDown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupIsOpen, setPopupIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener(
        "scroll",
        () => {
          setScrollDown(window.scrollY > 100);
        },
        { passive: true }
      );
    }
  }, []);

  //scrollDown: did we scroll down
  //menuopen: did we click to open it

  function openAccountPopup() {
    setPopupIsOpen(true);
    console.log(isLoggedIn);
  }

  function closeAccountPopup() {
    setPopupIsOpen(false);
  }

  return (
    <div id="NavBar">
      <div className="mobileMenu" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <Close color="white" /> : <Menu color="white" />}
      </div>
      <Link to="/">
        {(!scrollDown && !menuOpen) && <img src={USPSALogo} alt="USPSA Logo"></img>}
      </Link>
      <nav>
        <ul className={menuOpen ? "openSmallBar" : ""}>
          <li>
            <Link
              onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
              class="NavLink"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
              class="NavLink"
              to="about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
              class="NavLink"
              to="get-involved"
            >
              Get Involved
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
              class="NavLink"
              to="merchandise"
            >
              Merchandise
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
              class="NavLink"
              to="sign-in"
              id="actionButton"
            >
              Sign In
              <FormNextLink color="white" />
            </Link>
          </li>
          <li>
          {(()=> {
            if(isLoggedIn) {
                return (<LogOutButton></LogOutButton>)
            } else {
                return (<button onClick={openAccountPopup}> Sign Up (or Log In)</button>)
            }
          })()}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;