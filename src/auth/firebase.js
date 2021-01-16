import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBLzHJ-l5aa2sTduYiu-y2FEOHEYlqQZkQ',
  authDomain: 'url-shortener-build.firebaseapp.com',
  projectId: 'url-shortener-build',
  storageBucket: 'url-shortener-build.appspot.com',
  messagingSenderId: '702532168593',
  appId: '1:702532168593:web:746a19803a19a116098830',
});

export const auth = app.auth();
export const db = app.firestore();
