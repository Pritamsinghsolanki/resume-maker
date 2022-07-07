import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBerfiRuQrIPdLURVGIEUydNTuV5xizu7U",
  authDomain: "resume-maker-3d037.firebaseapp.com",
  projectId: "resume-maker-3d037",
  storageBucket: "resume-maker-3d037.appspot.com",
  messagingSenderId: "592448676043",
  appId: "1:592448676043:web:e7cf85a1f42d429ff0fb4e",
  measurementId: "G-K49RW7MZC7"
};
firebase.initializeApp(fbObj);
export default firebase;
