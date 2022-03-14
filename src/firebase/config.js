import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDSCS6LUwVyPn_tI5V-dxhA7TmUtZpn954",
  authDomain: "manalyse-4b356.firebaseapp.com",
  projectId: "manalyse-4b356",
  storageBucket: "manalyse-4b356.appspot.com",
  messagingSenderId: "170402278846",
  appId: "1:170402278846:web:480164599b775ec8b9ddef"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp }