// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKK98_A4L4kghf3hoUltgwhTVPmQ4D6Ns",
  authDomain: "sol-naciente-6024f.firebaseapp.com",
  projectId: "sol-naciente-6024f",
  storageBucket: "sol-naciente-6024f.appspot.com",
  messagingSenderId: "612712674034",
  appId: "1:612712674034:web:d8aa85818ad47eaf2a566b",
  measurementId: "G-XCLXM6WB38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
export {
  app,
  db,
  storage,
  analytics
}