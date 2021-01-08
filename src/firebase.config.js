import firebase from 'firebase/app';
import 'firebase/firestore';
import '@firebase/auth';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyB_Ew_LQ1OqKbdFXbZxaqLRDTYOEqiMUiA",
        authDomain: "facebook-messenger-clone-3b445.firebaseapp.com",
        projectId: "facebook-messenger-clone-3b445",
        storageBucket: "facebook-messenger-clone-3b445.appspot.com",
        messagingSenderId: "618699159089",
        appId: "1:618699159089:web:64ad5c9f27a69d6f204710",
        measurementId: "G-1BEGD6PCET"
});
const db = firebaseApp.firestore();
  // Initialize Firebase
export default db;