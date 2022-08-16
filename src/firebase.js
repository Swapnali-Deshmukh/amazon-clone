import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAgTNc1tPkO-Bep1j1Z2H8ij9CwTQQ7j5Q",
  authDomain: "clone-edf80.firebaseapp.com",
  projectId: "clone-edf80",
  storageBucket: "clone-edf80.appspot.com",
  messagingSenderId: "343034389575",
  appId: "1:343034389575:web:d6bf1f9a0bece37a873d62",
  measurementId: "G-9ZFQ2HSC34",
});


// const db=firebaseApp.firestore();
const auth = getAuth();

export { auth };