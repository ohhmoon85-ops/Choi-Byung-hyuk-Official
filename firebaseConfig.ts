import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAnw3jh91kVIhJDkwES60fJoWm5KrKghOo",
  authDomain: "choi-byung-hyuk.firebaseapp.com",
  projectId: "choi-byung-hyuk",
  storageBucket: "choi-byung-hyuk.firebasestorage.app",
  messagingSenderId: "826889552524",
  appId: "1:826889552524:web:ab7a5f956a0c03d6bab1a9",
  measurementId: "G-DY673TVWQS"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);