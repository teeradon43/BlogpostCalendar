import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEEdQry5fcTuvNnQnu9mmvXX9CXsWwfyE",
  authDomain: "blogpostcalendar.firebaseapp.com",
  projectId: "blogpostcalendar",
  storageBucket: "blogpostcalendar.appspot.com",
  messagingSenderId: "286961861778",
  appId: "1:286961861778:web:7272c8cdca618ff89a924b",
};

//Initial Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
window.firestore = firestore;
