// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW8BjHPRHAbbWbO0encEwgY7ulG7KqD9c",
  authDomain: "job-portal-cb72e.firebaseapp.com",
  projectId: "job-portal-cb72e",
  storageBucket: "job-portal-cb72e.appspot.com",
  messagingSenderId: "1070054419273",
  appId: "1:1070054419273:web:2337a9be41fbf8c7600898"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initialize firestore
const db = getFirestore(app);

//Initialize Auth
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {db,auth,provider};