// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwtnDFb6bnFlTFEqQjPkGbY6-35letpuQ",
  authDomain: "dc-menti-db.firebaseapp.com",
  projectId: "dc-menti-db",
  storageBucket: "dc-menti-db.appspot.com",
  messagingSenderId: "327724393071",
  appId: "1:327724393071:web:5736d0e581c458196f239a",
  measurementId: "G-RYZPTEP295"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};