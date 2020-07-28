import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAAsmwuyLChreeqoET_m5jk7fdo4UjOYro",
    authDomain: "tinder-clone-52bc1.firebaseapp.com",
    databaseURL: "https://tinder-clone-52bc1.firebaseio.com",
    projectId: "tinder-clone-52bc1",
    storageBucket: "tinder-clone-52bc1.appspot.com",
    messagingSenderId: "62069789041",
    appId: "1:62069789041:web:b6ecdcfae679ed62dd26d0",
    measurementId: "G-Q1C1FXKLE5",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database