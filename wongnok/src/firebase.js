// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-wongnok.firebaseapp.com",
  projectId: "mern-wongnok",
  storageBucket: "mern-wongnok.appspot.com",
  messagingSenderId: "931669088274",
  appId: "1:931669088274:web:b22e29b0ecc052710ba0cb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);