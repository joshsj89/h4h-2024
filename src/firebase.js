import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC3lP55U-GmVUq4DV1NLGKDx-8AKoQ7k2o",
    authDomain: "h4h-2024-9ccad.firebaseapp.com",
    projectId: "h4h-2024-9ccad",
    storageBucket: "h4h-2024-9ccad.appspot.com",
    messagingSenderId: "557903705605",
    appId: "1:557903705605:web:9784eeefab2cb558088e6c",
    measurementId: "G-HVL8WSP7FW"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
