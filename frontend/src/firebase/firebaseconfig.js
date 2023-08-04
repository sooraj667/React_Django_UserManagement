// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgC5pHaqyvho0smHSB0goh-7TFt3qA-tM",
  authDomain: "user-mangement-image.firebaseapp.com",
  projectId: "user-mangement-image",
  storageBucket: "user-mangement-image.appspot.com",
  messagingSenderId: "1097374554950",
  appId: "1:1097374554950:web:0b215926b5fc1507172347",
  measurementId: "G-RDPNFNFE4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)

