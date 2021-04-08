import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDD9TfnhTTABqwu8LrEtktIlIv4HzzcdO0",
  authDomain: "clone-76748.firebaseapp.com",
  projectId: "clone-76748",
  storageBucket: "clone-76748.appspot.com",
  messagingSenderId: "471931579547",
  appId: "1:471931579547:web:bb761e205af16d13abea3e",
  measurementId: "G-DCX40ED7NX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,provider};