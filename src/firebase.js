// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoErcPBbf-ZT0g_pQsACc8B_JbralhsVU",
  authDomain: "clone-c892d.firebaseapp.com",
  projectId: "clone-c892d",
  storageBucket: "clone-c892d.appspot.com",
  messagingSenderId: "122169604624",
  appId: "1:122169604624:web:12ba56855d27976069e895",
  measurementId: "G-3JH96JQ287",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
