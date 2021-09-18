
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { GoogleAuthProvider, FacebookAuthProvider, getAuth, linkWithPopup} from "firebase/auth";

import firebaseConfig  from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default {
    googleLogar: async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        let result = await firebase.auth().signInWithPopup(provider);
        return result;
    }
}


/*
import { initializeApp } from 'firebase/app';

import firebaseConfig from './firebaseConfig';
import { GoogleAuthProvider, FacebookAuthProvider, getAuth, linkWithPopup} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const auth = getAuth();

 linkWithPopup(auth.currentUser, googleProvider).then((result) => {
  // Accounts successfully linked.
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const user = result.user;
  // ...
}).catch((error) => {
  // Handle Errors here.
  // ...
});
export default linkWithPopup;

*/