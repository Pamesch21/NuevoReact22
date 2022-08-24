// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVwOawsPqu4eDqCYuGzkG_-dWXnxrgYSQ",
  authDomain: "reactnuevo-b3b46.firebaseapp.com",
  projectId: "reactnuevo-b3b46",
  storageBucket: "reactnuevo-b3b46.appspot.com",
  messagingSenderId: "251382473321",
  appId: "1:251382473321:web:0d8bd69d01b4cae98578f8"
};



const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db