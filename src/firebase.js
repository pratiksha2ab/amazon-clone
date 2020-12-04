// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDNRUt6jjYzorCtk_E3Ru7IdGtyw1XNWdE",
    authDomain: "clone-50815.firebaseapp.com",
    databaseURL: "https://clone-50815.firebaseio.com",
    projectId: "clone-50815",
    storageBucket: "clone-50815.appspot.com",
    messagingSenderId: "903560516806",
    appId: "1:903560516806:web:7a6b5b8bec29d843fe73c7",
    measurementId: "G-PJRLW7J42P"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth }