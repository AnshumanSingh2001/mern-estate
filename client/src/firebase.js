// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-a7da3.firebaseapp.com",
    projectId: "mern-estate-a7da3",
    storageBucket: "mern-estate-a7da3.appspot.com",
    messagingSenderId: "960070263613",
    appId: "1:960070263613:web:91a7ee24e134e1a9045b54"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);