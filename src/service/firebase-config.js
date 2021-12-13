// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import "firebase/firestore";

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCev8WbO71NaY1ikzfDkF86FsQThXIV384",
  authDomain: "my-project1-art.firebaseapp.com",
  projectId: "my-project1-art",
  storageBucket: "my-project1-art.appspot.com",
  messagingSenderId: "858113361769",
  appId: "1:858113361769:web:ef5bd171c25197ef97dff8",
  measurementId: "${config.measurementId}",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// firebase.firestore().settings({ timestampsInSnapshots: true });
