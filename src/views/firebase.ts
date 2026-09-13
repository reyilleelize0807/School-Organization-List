// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEifB-r5cd0N_WdVsOQ5bvqf5SKJzDMNc",
  authDomain: "bcc-org-list.firebaseapp.com",
  databaseURL: "https://bcc-org-list-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bcc-org-list",
  storageBucket: "bcc-org-list.firebasestorage.app",
  messagingSenderId: "757814369143",
  appId: "1:757814369143:web:cae38aeab6cf4516bd5f72",
  measurementId: "G-YHW65561GL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);