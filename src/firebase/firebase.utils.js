import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Basic Firbase Config Object
const config = {
    apiKey: "AIzaSyCL0v3Lv4e_WdpwHlpMHpCt1siPIMBUKyo",
    authDomain: "ecomm-6c2a3.firebaseapp.com",
    databaseURL: "https://ecomm-6c2a3.firebaseio.com",
    projectId: "ecomm-6c2a3",
    storageBucket: "ecomm-6c2a3.appspot.com",
    messagingSenderId: "484139263477",
    appId: "1:484139263477:web:15602d2d6ab662add06cbc",
    measurementId: "G-GWQET557JG"
  };

  //Initializing Firebase App with config object
  firebase.initializeApp(config);

  //Init Firebase Auth Service
  export const auth = firebase.auth();
  //Init Firebase Firestore Service
  export const firestore = firebase.firestore();

  //Init Firebase Google Auth Service 
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  //Exporting the whole Firebase Obj in case if needed
  export default firebase;
