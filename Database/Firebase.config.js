// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyARa2KLMEVhCJXnwNwOQq8PjXiw4JcfcsY",
  authDomain: "chatting-app-3657f.firebaseapp.com",
  projectId: "chatting-app-3657f",
  storageBucket: "chatting-app-3657f.firebasestorage.app",
  messagingSenderId: "605109992787",
  appId: "1:605109992787:web:1ca8b3bb885a547adb75a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;