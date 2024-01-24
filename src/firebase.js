import firebase from "firebase/compat/app";
import "firebase/compat/database";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use


// Config API Firebase - Connexion BDD
// Import the functions you need from the SDKs you need

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARGwwKNHarc7pvEjut2ofG7RsvXsBB0X8",
  authDomain: "contact-application-a319f.firebaseapp.com",
  databaseURL: "https://contact-application-a319f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "contact-application-a319f",
  storageBucket: "contact-application-a319f.appspot.com",
  messagingSenderId: "1020101326440",
  appId: "1:1020101326440:web:d6aabf276832e7d53d2ddd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref(); 
