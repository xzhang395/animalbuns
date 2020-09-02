import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyApMB1cSJlgnhKLe-C3jhit8epEXRcuqfo",
    authDomain: "animal-buns.firebaseapp.com",
    databaseURL: "https://animal-buns.firebaseio.com",
    projectId: "animal-buns",
    storageBucket: "animal-buns.appspot.com",
    messagingSenderId: "840981521613",
    appId: "1:840981521613:web:19d18de33394c8b5bf7584",
    measurementId: "G-MSJ1M9SRBC"
}

firebase.initializeApp(firebaseConfig);
export default firebase;