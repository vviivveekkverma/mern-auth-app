// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-8c86a.firebaseapp.com",
  projectId: "mern-auth-8c86a",
  storageBucket: "mern-auth-8c86a.appspot.com",
  messagingSenderId: "917593590612",
  appId: "1:917593590612:web:cc1ffff1306384776556c1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);