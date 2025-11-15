// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo9m6lKf73dIy21i39stZsl_kBFpD76YA",
  authDomain: "react-or-firebase.firebaseapp.com",
  projectId: "react-or-firebase",
  storageBucket: "react-or-firebase.firebasestorage.app",
  messagingSenderId: "462010337138",
  appId: "1:462010337138:web:5439d8df20dc8076b03feb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;