
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDEe8zHRVYufogjoYEo1YnOOvfSqijecac",
    authDomain: "unisexhairsaloon.firebaseapp.com",
    projectId: "unisexhairsaloon",
    storageBucket: "unisexhairsaloon.firebasestorage.app",
    messagingSenderId: "566005975679",
    appId: "1:566005975679:web:436c6c2e9ce2f4a0ac8d4a"
};

const app = initializeApp(firebaseConfig);

// Firestore
export const db = getFirestore(app);

// Authentication
export const auth = getAuth(app);
