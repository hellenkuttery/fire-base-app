// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABfN7nyAx6xDBHjjb4fyhVpxQFeXVtciE",
  authDomain: "new-contact-b77d6.firebaseapp.com",
  databaseURL: "https://new-contact-b77d6-default-rtdb.firebaseio.com",
  projectId: "new-contact-b77d6",
  storageBucket: "new-contact-b77d6.appspot.com",
  messagingSenderId: "299378538684",
  appId: "1:299378538684:web:19bda95b1d2d5bb9f338b9"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase;