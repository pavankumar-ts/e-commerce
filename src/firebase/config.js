import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDRjBHkiCcemxQruvyF21ERDKRPOy6T5mE",
    authDomain: "olxproject-a7400.firebaseapp.com",
    projectId: "olxproject-a7400",
    storageBucket: "olxproject-a7400.appspot.com",
    messagingSenderId: "967950660587",
    appId: "1:967950660587:web:eac05793f1c596ddcd5fae",
    measurementId: "G-TF7EETFMVL"
  };

const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app);
