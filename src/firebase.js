
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC0qdFRS3AfQOzPgA_QLD3z-SbNftdjFo",
  authDomain: "feline-franciska.firebaseapp.com",
  projectId: "feline-franciska",
  storageBucket: "feline-franciska.appspot.com",
  messagingSenderId: "518483031064",
  appId: "1:518483031064:web:2cece6c3da53d136a97f6d",
  measurementId: "G-6RWNRJSCQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app)