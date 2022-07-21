import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPb3wleGcpNjc9OxTR0k2jQSX4UYROu3c",
  authDomain: "gazu-874da.firebaseapp.com",
  projectId: "gazu-874da",
  storageBucket: "gazu-874da.appspot.com",
  messagingSenderId: "206218084253",
  appId: "1:206218084253:web:a51ac12c93ab49b10f7974",
  measurementId: "G-88T2S8MJRZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
