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

  //Storing Google SignIn User to our Firestore DB
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    //1.Pointing to user object in the Firestore DB to check if user already exists
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    //2.Pulling user via uid from Firestore 
    const snapShot = await userRef.get(); 
    //Snapchot.exists will be false if user does not exists
    /*  Code below this line will check if user exists in our Firestore DB 
        If it does not exists, then it will add the new user in our DB with configured properties
    */
    if(!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error) {
        console.log('Error creating user', error.message);
      }
    }
    //Returning userRef Document to use it in our App/State 
    return userRef; 
  }

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
