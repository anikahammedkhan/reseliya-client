// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPVGUb8MLpS8kwLbk8jRwC4_yyeTkxVAU",
    authDomain: "reseliya.firebaseapp.com",
    projectId: "reseliya",
    storageBucket: "reseliya.appspot.com",
    messagingSenderId: "470262876082",
    appId: "1:470262876082:web:ddb7a3a7b571e8ee1f46ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;