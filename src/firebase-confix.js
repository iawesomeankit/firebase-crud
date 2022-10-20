import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyC_n-HptquEZHdReWvvDtXogDXyaq6WBvg",
  authDomain: "react-crud-1cb43.firebaseapp.com",
  projectId: "react-crud-1cb43",
  storageBucket: "react-crud-1cb43.appspot.com",
  messagingSenderId: "773121887751",
  appId: "1:773121887751:web:9525f210931add0ac0a4a2",
  measurementId: "G-18Q2D22S23"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);