import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1HYOrsQ7wpMddVUsz6hPP-1FHgmSYBog",
  authDomain: "tutor-79826.firebaseapp.com",
  projectId: "tutor-79826",
  storageBucket: "tutor-79826.firebasestorage.app",
  messagingSenderId: "410104140038",
  appId: "1:410104140038:web:5794944f49de8134698e87",
  measurementId: "G-RF7YSX9FG7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
