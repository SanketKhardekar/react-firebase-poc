import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/messaging";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKER,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_PROJECT_APP_ID,
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const database = firebase.database();
export const storage = firebase.storage();
export const messaging = firebase.messaging();

export default firebase;
