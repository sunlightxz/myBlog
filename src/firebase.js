// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn-RPCO_rNqJjKXHxJNuQCYSOyYTjA5hA",
  authDomain: "backup-5768d.firebaseapp.com",
  projectId: "backup-5768d",
  storageBucket: "backup-5768d.appspot.com",
  messagingSenderId: "854003495654",
  appId: "1:854003495654:web:db7d3dcd3b876fa085c127"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
