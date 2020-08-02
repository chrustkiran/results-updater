import Firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAW2p8uuWg0uS5cTaw1DScNMSUCaR2jRNc",
    authDomain: "tdusa-exam.firebaseapp.com",
    databaseURL: "https://tdusa-exam.firebaseio.com",
    projectId: "tdusa-exam",
    storageBucket: "tdusa-exam.appspot.com",
    messagingSenderId: "794021363140",
    appId: "1:794021363140:web:75bc6bb9a2754b23df7891",
    measurementId: "G-89WB46SKE6"
};

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
