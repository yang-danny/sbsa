import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBMiFCRfb4Pk2YAyulBrCW5PD-gMnvvSgs",
    authDomain: "sbsa-10151.firebaseapp.com",
    projectId: "sbsa-10151",
    storageBucket: "sbsa-10151.appspot.com",
    messagingSenderId: "710689921650",
    appId: "1:710689921650:web:c80ccc52dfe9bf1cb500eb"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;