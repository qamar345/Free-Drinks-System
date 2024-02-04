// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyAQ8yF0ZoNd-4msknyBPZiHIqXUNqhJpcE",
  authDomain: "drinkpass-82c81.firebaseapp.com",
  projectId: "drinkpass-82c81",
  storageBucket: "drinkpass-82c81.appspot.com",
  messagingSenderId: "216292305916",
  appId: "1:216292305916:web:84fb0402339eabea18e079",
  measurementId: "G-PQ692TS2CT",
});

// Initialize Firebase
const storage = getStorage(firebaseConfig);
export default storage;
