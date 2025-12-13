// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 🔴 Firebase config (STEP 3 থেকে copy করা config এখানে paste করো)
const firebaseConfig = {
  apiKey: "AIzaSyBltdyYX9q0kgX0oC8lZWaAJCSxfn796ts",
  authDomain: "my-f-project-91c0b.firebaseapp.com",
  projectId: "my-f-project-91c0b",
  storageBucket: "my-f-project-91c0b.firebasestorage.app",
  messagingSenderId: "32254693984",
  appId: "1:32254693984:web:055a76a5c72728186c6905"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore database
export const db = getFirestore(app);
