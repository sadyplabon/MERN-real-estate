// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-9a7e6.firebaseapp.com",
  projectId: "mern-real-estate-9a7e6",
  storageBucket: "mern-real-estate-9a7e6.appspot.com",
  messagingSenderId: "203563524253",
  appId: "1:203563524253:web:d1419fc14a578ca0897474"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);