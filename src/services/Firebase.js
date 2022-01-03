import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const config = {
    apiKey: "AIzaSyCeyr3aF2qeDC4JTcIzBqSjiwMVibxhg_s",
    authDomain: "chatty-c8388.firebaseapp.com",
    databaseURL: "chatty-c8388.appspot.com"
  };
  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();