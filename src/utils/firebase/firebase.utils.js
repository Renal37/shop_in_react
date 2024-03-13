import { initializeApp } from "firebase/app";
import {  onAuthStateChanged, signOut, getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
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

export const addCollectionAndDocument=async(collectionKey, objectToAdd)=>{
  const collectionRef = collection(db,collectionKey);
  const batch = writeBatch(db);

  objectToAdd.forEach((object)=>{
    const docRef=doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef,object);
  })

  await batch.commit();
  console.log('done')
}

export const getCategotiesAndDocument = async()=>{
    const collectionRef = collection(db,'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((docShapshot)=>docShapshot.data());
}

export const createUserDocumentFromAuth = async (userAuth, additianelInf = {}) => {
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
                createAt,
                ...additianelInf,
            });
        } catch (error) {
            console.log('error create user', error.message);
        }
    }
    return userDocRef;
};

export const createaAuthUserWithEmail = async (email,password) =>{
if(!email && !password) return;

return await createUserWithEmailAndPassword(auth,email,password);
} ;
export const signInAutiUserWithEmailAndPassword = async (email,password) =>{
    if(!email && !password) return;
    
    return await signInWithEmailAndPassword(auth,email,password);
    } ;
    
 export const signOutUser = async() => await signOut(auth);   

 export const onAuthStateChangedListener = (callback) => 
 onAuthStateChanged(auth,callback,
    // errorCallback,
    // completedCallback
    );

    // {


    
    // }