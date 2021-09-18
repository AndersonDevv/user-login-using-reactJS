
import { initializeApp } from 'firebase/app';

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

const firebaseConfig = {
    apiKey: "AIzaSyA4GZhFG-eRzrDclx6manbl0n7e-yx2AWo",
    authDomain: "reactjs-54cac.firebaseapp.com",
    projectId: "reactjs-54cac",
    storageBucket: "reactjs-54cac.appspot.com",
    messagingSenderId: "924285132329",
    appId: "1:924285132329:web:58bdd87ca0d14a4e588638"
  };

  