// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
<<<<<<< HEAD
import {getFirestore} from 'firebase/firestore'
=======
import { getFirestore } from 'firebase/firestore'
import { getAuth, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth'
>>>>>>> master
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYjLveut2AniIRcmreZUDAL26WMQl5xro",
    authDomain: "afftograf-4be9e.firebaseapp.com",
    projectId: "afftograf-4be9e",
    storageBucket: "afftograf-4be9e.appspot.com",
    messagingSenderId: "84203882",
    appId: "1:84203882:web:d655c36e6671ffc4126d13"
};
<<<<<<< HEAD

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)

export { app,database}
=======
const app = initializeApp(firebaseConfig);
// Auth with email link
const auth = getAuth();
const actionCodeSettings = {
    url: "http://localhost:5173/Signed", //where to redirect
    handleCodeInApp: true,
};

// Initialize Firebase
const database = getFirestore(app)

export { app, database, auth, actionCodeSettings, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink }
>>>>>>> master
