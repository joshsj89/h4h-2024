import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

import { Menu, Close } from "grommet-icons";
import AccountPopup from '../SignInPopup/AccountPopup'
import LogOutButton from "../LogOutButton/LogOutButton";

function NavBar({userID, isLoggedIn, setPhoneNumber, setFullName}) {
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
      <nav className={scrollDown ? "hoverColor" : ""}>
        <ul className={menuOpen ? "openSmallBar" : ""}>
          <li>
            <NavLink
              onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
              class="NaviLink"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
              class="NaviLink"
              to="about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
              class="NaviLink"
              to="get-involved"
            >
              Get Involved
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
              class="NaviLink"
              to="merchandise"
            >
              Merchandise
            </NavLink>
          </li>
          <li>
          {(()=> {
            if(isLoggedIn) {
                return (<LogOutButton></LogOutButton>)
            } else {
                return (<button id="actionButton" onClick={openAccountPopup}> Sign Up (or Log In)</button>)
            }
          })()}
          </li>
        </ul>
        <AccountPopup closeAccountPopup={closeAccountPopup} isOpen={popupIsOpen} setPhoneNumber={setPhoneNumber} setFullName={setFullName}></AccountPopup>
      </nav>
    </div>
  );
}

export default NavBar;
