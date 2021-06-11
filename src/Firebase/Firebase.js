import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAwcJ75JyVH8vyBeuexAtVHp2GMXo4R5sM",
    authDomain: "slick-bab74.firebaseapp.com",
    projectId: "slick-bab74",
    storageBucket: "slick-bab74.appspot.com",
    messagingSenderId: "547359291074",
    appId: "1:547359291074:web:f32997d76891def88aed5b"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export var auth = firebase.auth();
export var firestore = firebase.firestore();
export var googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export var serverTimestamp = () => firebase.firestore.FieldValue.serverTimestamp();
export var storage = firebase.storage().ref();

export default firebase;
