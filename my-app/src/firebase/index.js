// import firebaseApp from 'firebase/app'
import 'firebase/auth';
import firebase from 'firebase';

const config = {
    apiKey: "",
    authDomain: "pandemonium-5a001.firebaseapp.com",
    databaseURL: "https://pandemonium-5a001.firebaseio.com",
    projectId: "pandemonium",
    storageBucket: "pandemonium.appspot.com",
    messagingSenderId: "472468721699",
    appId: ""
}

export const firebaseApp = firebase.initializeApp(config);
export const db = firebase.firestore();

//export default firebaseApp;
