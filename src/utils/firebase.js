// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe3kI6-SK7X2cZS0-0OWUyHh2vwzrexgc",
  authDomain: "flickfindergpt.firebaseapp.com",
  projectId: "flickfindergpt",
  storageBucket: "flickfindergpt.appspot.com",
  messagingSenderId: "621457274931",
  appId: "1:621457274931:web:1ec0219e3fecc099dc4b46",
  measurementId: "G-XK3YKPZ442"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();