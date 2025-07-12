import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqjD6VNN-5kGj61K5bDGGOXdnImX5esXI",
  authDomain: "rewear-b498a.firebaseapp.com",
  projectId: "rewear-b498a",
  storageBucket: "rewear-b498a.firebasestorage.app",
  messagingSenderId: "607753444522",
  appId: "1:607753444522:web:8f3b87be2be32c147dc4d3",
  measurementId: "G-3F4BGNS9NT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
