// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: "todo-habits-app.firebaseapp.com",
  projectId: "todo-habits-app",
  storageBucket: "todo-habits-app.appspot.com",
  messagingSenderId: "951460963906",
  appId: "1:951460963906:web:b2e9d7fbde5599a89e6fdb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service;
export const db = getFirestore(app);
