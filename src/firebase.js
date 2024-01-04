import firebase from "firebase/compat/app";
import "firebase/compat/database";


// Config API Firebase - Connexion BDD
const firebaseConfig = {
    apiKey: "AIzaSyCAuic_gzFgFUy6nzHClxnOuavTRKkx9PM",
    authDomain: "react-contact-7e55c.firebaseapp.com",
    databaseURL: "https://react-contact-7e55c-default-rtdb.firebaseio.com/",
    projectId: "react-contact-7e55c",
    storageBucket: "react-contact-7e55c.appspot.com",
    messagingSenderId: "692238819484",
    appId: "1:692238819484:web:53c1692c92799435fe8d59"

  };

  const fireDb = firebase.initializeApp(firebaseConfig); 
  export default fireDb.database().ref(); 
