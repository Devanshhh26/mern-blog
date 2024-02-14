// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-2e002.firebaseapp.com",
  projectId: "mern-blog-2e002",
  storageBucket: "mern-blog-2e002.appspot.com",
  messagingSenderId: "785149252841",
  appId: "1:785149252841:web:b58029c6ef0e367a67cc78"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
