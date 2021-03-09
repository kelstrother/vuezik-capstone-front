import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDMzrD9G3PdsRXZGEuMu_hsmAbGR72eMg",
  authDomain: "vuezic.firebaseapp.com",
  projectId: "vuezic",
  storageBucket: "vuezic.appspot.com",
  messagingSenderId: "653463409630",
  appId: "1:653463409630:web:98c474198b3da7d066034f",
};

// init firebase
firebase.initializeApp(firebaseConfig);

//  init firestore service
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();

export { projectFirestore, projectAuth };
