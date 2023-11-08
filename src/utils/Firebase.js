// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZQ0Sv5LXDkXEaRPcth8E9ZFSG952npxU",
  authDomain: "netflixgpt-ef72b.firebaseapp.com",
  projectId: "netflixgpt-ef72b",
  storageBucket: "netflixgpt-ef72b.appspot.com",
  messagingSenderId: "97317237926",
  appId: "1:97317237926:web:9d946364488194a53e3067",
  measurementId: "G-YQX9C4ZJ10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth();  // auth was used by again and again in firebase authentication -> login