import firebase from 'firebase/app';
import 'firebase/database';

var DB_CONFIG = {
  apiKey: "AIzaSyCypf0U_Viqej81CUYE-C_A8jeU8UWSTcY",
  authDomain: "minestatslic.firebaseapp.com",
  databaseURL: "https://minestatslic.firebaseio.com",
  projectId: "minestatslic",
  storageBucket: "minestatslic.appspot.com",
  messagingSenderId: "153914293114",
  appId: "1:153914293114:web:57e39488bb756249f6b4c3"
};

var fireBaseApp = firebase.initializeApp(DB_CONFIG);

export default fireBaseApp;