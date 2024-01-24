
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCC0qdFRS3AfQOzPgA_QLD3z-SbNftdjFo",
  authDomain: "feline-franciska.firebaseapp.com",
  projectId: "feline-franciska",
  storageBucket: "feline-franciska.appspot.com",
  messagingSenderId: "518483031064",
  appId: "1:518483031064:web:2cece6c3da53d136a97f6d",
  measurementId: "G-6RWNRJSCQM"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const storage = getStorage(app)