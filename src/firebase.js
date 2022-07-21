import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwWRBuVA5_QO0OlX3y_74zZ8gd8X_WKN0",
  authDomain: "gazuweb-ba988.firebaseapp.com",
  projectId: "gazuweb-ba988",
  storageBucket: "gazuweb-ba988.appspot.com",
  messagingSenderId: "576029906800",
  appId: "1:576029906800:web:5009e9dcf9c96a33fe21b5",
  measurementId: "G-9P5YL43FSH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
