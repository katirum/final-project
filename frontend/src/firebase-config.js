// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { 
getAuth, 
createUserWithEmailAndPassword, 
updateProfile, 
onAuthStateChanged, 
signInWithEmailAndPassword, 
signOut 
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAXQt1bqDYEW-_8AOkaODg7tIp71tIRguc",
  authDomain: "languable-ecc90.firebaseapp.com",
  projectId: "languable-ecc90",
  storageBucket: "languable-ecc90.appspot.com",
  messagingSenderId: "626922961490",
  appId: "1:626922961490:web:5b4d1e98e9f32f25b3fd8b",
  measurementId: "G-P8P4H2RTLM"
};


// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

export {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
  }


