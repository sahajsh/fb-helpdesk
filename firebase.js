import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCGGPEn_Sj4mqmhIGECerOczS2VaPAoW0w",
    authDomain: "fb-help-desk-97232.firebaseapp.com",
    projectId: "fb-help-desk-97232",
    storageBucket: "fb-help-desk-97232.appspot.com",
    messagingSenderId: "350933056387",
    appId: "1:350933056387:web:35f7f89e5512894bc5d4b6"
  }).auth();