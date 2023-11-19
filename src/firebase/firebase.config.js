
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID
};
// const firebaseConfig = {
//   apiKey: "AIzaSyDjg0KtitJ8otEGMVtRow-BTT8euoONVDY",
//   authDomain: "careos-7e27e.firebaseapp.com",
//   projectId: "careos-7e27e",
//   storageBucket: "careos-7e27e.appspot.com",
//   messagingSenderId: "256143795358",
//   appId: "1:256143795358:web:2393d5eeccc45ab306478f"
// };
const app = initializeApp(firebaseConfig);

export default app;
