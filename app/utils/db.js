import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(firebaseApp);

export default db;
