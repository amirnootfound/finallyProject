import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCh2F7rvbhyvWRp7amfCS2oafDJLCX1p8g",
    authDomain: "login-be1c6.firebaseapp.com",
    projectId: "login-be1c6",
    storageBucket: "login-be1c6.firebasestorage.app",
    messagingSenderId: "151641250396",
    appId: "1:151641250396:web:0d26ea6823877a9cc36499"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

export { firebase };