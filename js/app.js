// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZaV9JalohXQg1Tz7HV3alZtbdm2Kp8X8",
  authDomain: "conectados-1d1e3.firebaseapp.com",
  projectId: "conectados-1d1e3",
  storageBucket: "conectados-1d1e3.appspot.com",
  messagingSenderId: "215350097307",
  appId: "1:215350097307:web:05fe3243e8ffca25b19d3e",
  measurementId: "G-Q40MEDPQ7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);