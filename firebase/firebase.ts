import { getApp, getApps } from "firebase/app";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsXHzzvTLKt4SXkJf1FPznQTdzu80bRMo",
  authDomain: "chatcpt-6a643.firebaseapp.com",
  databaseURL: "https://chatcpt-6a643-default-rtdb.firebaseio.com",
  projectId: "chatcpt-6a643",
  storageBucket: "chatcpt-6a643.appspot.com",
  messagingSenderId: "239252562699",
  appId: "1:239252562699:web:5a50abaff8016e7dedf80e",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
