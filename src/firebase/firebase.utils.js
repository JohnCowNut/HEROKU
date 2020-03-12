import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCUjJxlJ8IDiub6By4Am8lz_WP4WMYgQBw",
    authDomain: "crown-db-bca87.firebaseapp.com",
    databaseURL: "https://crown-db-bca87.firebaseio.com",
    projectId: "crown-db-bca87",
    storageBucket: "crown-db-bca87.appspot.com",
    messagingSenderId: "295227888303",
    appId: "1:295227888303:web:21e31d3ef67d9c65f57a5a",
    measurementId: "G-XLMWSRFXWW"
  };
firebase.initializeApp(config);

// authentication
export const auth = firebase.auth();
// store
export const firestore = firebase.firestore();


// setup GOOGLE AUTHENTICATION

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () =>  auth.signInWithPopup(provider);
export const createUserProfileDocument = async (userAuth, addTrantionalData) => {
	if(!userAuth) return ;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	if(!snapShot.exists) {
		const {email,displayName} = userAuth;
		const createTime = new Date();
		try {
			
		
			await userRef.set({
					email,
					displayName,
					createTime,
					...addTrantionalData
			})
			
		} catch (error) {
			console.log("hey boss have ",error);
		}
	}
	return userRef;

}


export default firebase;



