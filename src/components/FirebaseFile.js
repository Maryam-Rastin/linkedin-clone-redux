import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyArDyyXebXO4S-JhPx9Ht1LaSDVtD9YP1U",
  authDomain: "linkedin-clone-834cc.firebaseapp.com",
  projectId: "linkedin-clone-834cc",
  storageBucket: "linkedin-clone-834cc.firebasestorage.app",
  messagingSenderId: "12228059124",
  appId: "1:12228059124:web:dec3a31cbb49d6ac58a3a1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
