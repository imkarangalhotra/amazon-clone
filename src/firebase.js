import firebase from "firebase";
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0vU5B9Axk2aQvJqKAv7id44-ZcDu181g",
    authDomain: "clone-fd1c0.firebaseapp.com",
    projectId: "clone-fd1c0",
    storageBucket: "clone-fd1c0.appspot.com",
    messagingSenderId: "113413059823",
    appId: "1:113413059823:web:818451a548af268c54171a",
    measurementId: "G-V5PWHQG6MV"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  
  const db= firebaseApp.firestore();
  const auth = firebase.auth();

  export{db, auth};
