// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzC1K8JzinhIcdkAP6twupPGlkoQAF-OE",
  authDomain: "bunima-2dc2b.firebaseapp.com",
  projectId: "bunima-2dc2b",
  storageBucket: "bunima-2dc2b.appspot.com",
  messagingSenderId: "872383369881",
  appId: "1:872383369881:web:f35fae094a083555ba5e08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db