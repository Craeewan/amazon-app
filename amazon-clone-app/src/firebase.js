import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyD1KfsqjocFPGEMZ4Eo0gxexFHwi5dh8vw",
    authDomain: "clone-app-7c10f.firebaseapp.com",
    databaseURL: "https://clone-app-7c10f.firebaseio.com",
    projectId: "clone-app-7c10f",
    storageBucket: "clone-app-7c10f.appspot.com",
    messagingSenderId: "207125893720",
    appId: "1:207125893720:web:4b7abdd784ce964871702d",
    measurementId: "G-VLJRJ4VJHJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};