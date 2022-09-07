// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCinx3TpR_GqS18wxGt2dwcGXc6aIkqtzc",
  authDomain: "chapp-27dd4.firebaseapp.com",
  projectId: "chapp-27dd4",
  storageBucket: "chapp-27dd4.appspot.com",
  messagingSenderId: "1079554814821",
  appId: "1:1079554814821:web:ac1c7596c8a4b95774a78c",
  measurementId: "G-LWJP01B396"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
