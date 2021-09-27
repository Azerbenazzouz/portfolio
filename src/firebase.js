// import lab
import firebase from 'firebase'
// config
var firebaseConfig = {
    apiKey: "AIzaSyDN4bkNaea9O2bPizjjb9XynBoTpqijUKM",
    authDomain: "portfolio-azer.firebaseapp.com",
    projectId: "portfolio-azer",
    storageBucket: "portfolio-azer.appspot.com",
    messagingSenderId: "831969726073",
    appId: "1:831969726073:web:79d7fffbb8c1d2a9154ea8",
    measurementId: "G-6LHS9RLRGB"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const rdb = firebase.database();
  const auth = firebase.auth();
  // export
  export{auth}
  export default db;
  export {rdb};

