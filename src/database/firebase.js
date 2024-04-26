// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk2o4h8EsYgF0IGf9iVYhI2G-uRxCFw3U",
  authDomain: "farmacia-fv.firebaseapp.com",
  databaseURL: "https://farmacia-fv-default-rtdb.firebaseio.com",
  projectId: "farmacia-fv",
  storageBucket: "farmacia-fv.appspot.com",
  messagingSenderId: "331379906330",
  appId: "1:331379906330:web:3a287549b801241da7bea3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
