import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';
// if these stop working change firebase/app to firebase. Delete the imports below

const firebaseConfig = {
    apiKey: "AIzaSyDU6e0OzrRHYRzwcGKjwZOiU9BZccOPMdQ",
    authDomain: "free-resume-builder.firebaseapp.com",
    databaseURL: "https://free-resume-builder.firebaseio.com",
    projectId: "free-resume-builder",
    storageBucket: "free-resume-builder.appspot.com",
    messagingSenderId: "252331824789",
    appId: "1:252331824789:web:dcf70ee21252ea63eeed9c",
    measurementId: "G-NYY5LGNXKQ"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default fire;