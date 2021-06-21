import firebase from "firebase/app";
import "firebase/forestore";

var firebaseConfig = {
  apiKey: "AIzaSyAH32oLjHlvvIKQ8iSRJ8W7tQDkOyF9AyE",
  authDomain: "fireblob-aec9b.firebaseapp.com",
  projectId: "fireblob-aec9b",
  storageBucket: "fireblob-aec9b.appspot.com",
  messagingSenderId: "595278905096",
  appId: "1:595278905096:web:8d15bc6445ecbd2c1936bd",
  measurementId: "G-80VRGVJE1E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();