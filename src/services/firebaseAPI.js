import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCQKfQTu2LjbeJr7JcCtToUoyoRRkNcsyQ',
  authDomain: 'sss-cv.firebaseapp.com',
  projectId: 'sss-cv',
  storageBucket: 'sss-cv.appspot.com',
  messagingSenderId: '30735555834',
  appId: '1:30735555834:web:aa3c7ee47e648210253d43',
  measurementId: 'G-18GFVWBJ8X'
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
