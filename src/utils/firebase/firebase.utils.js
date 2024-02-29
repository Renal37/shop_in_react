import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword } from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
}
    from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAwOHS6-46KkY-5VgRjI6ddbRuJo0H0Hvc",
    authDomain: "shop-db-5babb.firebaseapp.com",
    projectId: "shop-db-5babb",
    storageBucket: "shop-db-5babb.appspot.com",
    messagingSenderId: "115843819830",
    appId: "1:115843819830:web:9ff454f55399ef9094ab97"
};
const firebaseApp = initializeApp(firebaseConfig);

const googleprovider = new GoogleAuthProvider();

googleprovider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleprovider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleprovider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    if (!userAuth) return;
    
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt
            });
        } catch (error) {
            console.log('error create user', error.message);
        }
    }
    return userDocRef;
};

export const createaAuthUser = async (email,password) =>{
if(!email || !password) return;

createUserWithEmailAndPassword(auth,email,password);
} 
