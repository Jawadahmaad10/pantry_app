// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfOezO5chImljvU0t1Gt3ZdsrXffV7eyQ",
  authDomain: "pantryapp-46eb1.firebaseapp.com",
  projectId: "pantryapp-46eb1",
  storageBucket: "pantryapp-46eb1.appspot.com",
  messagingSenderId: "1012138668195",
  appId: "1:1012138668195:web:b1e6168cd73d96be2b8f16",
  measurementId: "G-7S2BMS2V1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}