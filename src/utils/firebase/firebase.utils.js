import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import {
   getFirestore,
   doc, getDoc,
   setDoc 
} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTaNUtSJtjow5LYoBOJERUIq4C__O_VZg",
  authDomain: "clothing-store-92d16.firebaseapp.com",
  projectId: "clothing-store-92d16",
  storageBucket: "clothing-store-92d16.appspot.com",
  messagingSenderId: "828608166494",
  appId: "1:828608166494:web:f4fe5932218ff6df2bd2cf",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef)

    const userSnapshop = await getDoc(userDocRef);
    if(!userSnapshop.exists()){
      const { displayName,email} = userAuth;
      const createdAt = new Date();
      try{
        setDoc(userDocRef, {
          displayName,
          email,
          createdAt
        })
      }catch(err){
        console.log('error creating the user', err.message)
      }
    }
    return userDocRef;
}