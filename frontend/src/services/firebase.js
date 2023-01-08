import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXQt1bqDYEW-_8AOkaODg7tIp71tIRguc",
  authDomain: "languable-ecc90.firebaseapp.com",
  projectId: "languable-ecc90",
  storageBucket: "languable-ecc90.appspot.com",
  messagingSenderId: "626922961490",
  appId: "1:626922961490:web:5b4d1e98e9f32f25b3fd8",
  /* measurementId: "G-P8P4H2RTLM" */
};

initializeApp(firebaseConfig);

const auth = getAuth();

export default {
  auth
};
