import './App.css';
import GetInvolved from './Pages/GetInvolved/GetInvolved';
import Merchandise from './Pages/Merchandise/Merchandise';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import NavBar from './Components/NavBar/NavBar';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState } from 'react';

import { collection, doc, setDoc } from "firebase/firestore";
import {db} from './firebase'


function App() {

  const auth = getAuth();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userID, setUserID] = useState('');

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // register the state
      setIsLoggedIn(true);
      const uid = user.uid;
      setUserID(uid);

      // add the user to the database, if not already there.
      try {

        const docRef = doc(db, "users", uid);

        await setDoc(docRef, {
          email: user.email,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

    } else {
      setIsLoggedIn(false);
      setUserID("");
    }
  });

  return (
    <div className="App">
      <NavBar userID={userID} isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path="/" element={ <Home isLoggedIn={isLoggedIn} userID={userID}/> } />
        <Route path="about" element={ <About isLoggedIn={isLoggedIn} userID={userID}/> } />
        <Route path="get-involved" element={ <GetInvolved isLoggedIn={isLoggedIn} userID={userID}/> } />
        <Route path="merchandise" element={ <Merchandise isLoggedIn={isLoggedIn} userID={userID}/> } />
      </Routes>
    </div>
  );
}

export default App;
