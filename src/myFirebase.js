import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiQS-XDqQ_JmNB6_w5JnlHuFTzr2q1gp0",
  authDomain: "todo-app-72c1b.firebaseapp.com",
  projectId: "todo-app-72c1b",
  storageBucket: "todo-app-72c1b.appspot.com",
  messagingSenderId: "924039992120",
  appId: "1:924039992120:web:dc4213fa670eabc116a7cd",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
