import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJWC3M5wsrN1_IkrWVNtv6zJFMwkFZ-2Q",
  authDomain: "daily-task-planner-fd7eb.firebaseapp.com",
  projectId: "daily-task-planner-fd7eb",
  storageBucket: "daily-task-planner-fd7eb.firebasestorage.app",
  messagingSenderId: "208926275708",
  appId: "1:208926275708:web:1b21e03b461f73772971f9",
  measurementId: "G-2NJRXN1H6X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
};