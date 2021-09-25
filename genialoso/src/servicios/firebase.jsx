import firebase from "firebase";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxcr2OODandXfrEDLOGER1jlZ3phcXxG8",
  authDomain: "react-coderhouse-2ada5.firebaseapp.com",
  projectId: "react-coderhouse-2ada5",
  storageBucket: "react-coderhouse-2ada5.appspot.com",
  messagingSenderId: "758842939764",
  appId: "1:758842939764:web:35e2823a85b82539677421",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
