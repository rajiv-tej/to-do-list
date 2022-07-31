import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyBBJEgtqOhZyKNdLNZg_ajOlpP1JIXnL9g",
  authDomain: "to-do-list-c44df.firebaseapp.com",
  projectId: "to-do-list-c44df",
  storageBucket: "to-do-list-c44df.appspot.com",
  messagingSenderId: "635449004008",
  appId: "1:635449004008:web:8611a4fa308dc5b1de1e5d"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const provider = new firebase.auth.GoogleAuthProvider();
  const db = firebase.firestore();
  const auth = firebase.auth();
  export {db , provider ,auth} ;
