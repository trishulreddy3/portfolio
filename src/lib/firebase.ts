import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeRvVqePNkR1JCX8U5HrHFFMN_X0s2A08",
  authDomain: "my-portfolio-fb767.firebaseapp.com",
  projectId: "my-portfolio-fb767",
  storageBucket: "my-portfolio-fb767.firebasestorage.app",
  messagingSenderId: "82946204008",
  appId: "1:82946204008:web:7f69ab6209816b013d36dd",
  measurementId: "G-8TPFD6M35S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export default app;