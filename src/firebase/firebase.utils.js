import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBNMBBgw7vkcBRUw_OXcNKY4DzGc6kuRPY",
    authDomain: "crown-db-5caf4.firebaseapp.com",
    databaseURL: "https://crown-db-5caf4.firebaseio.com",
    projectId: "crown-db-5caf4",
    storageBucket: "crown-db-5caf4.appspot.com",
    messagingSenderId: "987405123604",
    appId: "1:987405123604:web:ba6e3ad86e30f70507e701",
    measurementId: "G-2JQ6EQFHYZ"
};

firebase.initializeApp(config);

export const createdUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;