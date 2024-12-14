import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDweamfVVGezOqgzsNgkBMjT1NX4hGerbk",
  authDomain: "edible-cutlery.firebaseapp.com",
  databaseURL: "https://edible-cutlery-default-rtdb.firebaseio.com",
  projectId: "edible-cutlery",
  storageBucket: "edible-cutlery.appspot.com",
  messagingSenderId: "97847430125",
  appId: "1:97847430125:web:affc7ee4be79ee65b1f5e4",
  measurementId: "G-EPYND4NR35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export the services for use in other files
export { auth, db, storage, createUserWithEmailAndPassword, doc, setDoc, ref, uploadBytes, uploadBytesResumable, getDownloadURL };
