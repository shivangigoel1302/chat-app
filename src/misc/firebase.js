import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyC4uTnypmmzNR7dtJ4pWR7M_DVQI4wW0QE",
    authDomain: "chat-web-app-d19ef.firebaseapp.com",
    projectId: "chat-web-app-d19ef",
    storageBucket: "chat-web-app-d19ef.appspot.com",
    messagingSenderId: "1088602043433",
    appId: "1:1088602043433:web:91090e2d6ae00fd413d838"
  };

  const app = firebase.initializeApp(config);

  export const auth = app.auth();
  export const database = app.database();
  export const storage = app.storage();