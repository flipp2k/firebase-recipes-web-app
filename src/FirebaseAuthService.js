import { firebase } from "./FirebaseConfig";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail,
	signInWithPopup,
	onAuthStateChanged,
} from "firebase/auth";

export const auth = getAuth(firebase);

const registerUser = (email, password) => {
	console.log("auth", auth);
	debugger;
	return createUserWithEmailAndPassword(auth, email, password);
};

const loginUser = (email, password) => {
	return signInWithEmailAndPassword(auth, email, password);
};

const logoutUser = () => {
	return signOut(auth);
};

const sendResetEmail = (email) => {
	return sendPasswordResetEmail(auth, email);
};

const loginWithGoogle = () => {
	const provider = new firebase.auth.GoogleAuthProvider();
	return signInWithPopup(provider);
};

const subscribeToAuthChanges = (handleAuthChange) => {
	onAuthStateChanged(auth, (user) => {
		handleAuthChange(user);
	});
};

const FireBaseAuthService = {
	registerUser,
	loginUser,
	logoutUser,
	sendResetEmail,
	loginWithGoogle,
	subscribeToAuthChanges,
};

export default FireBaseAuthService;
