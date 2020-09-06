import * as firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAewoE4iOL6bUY8mHLYJjfPXnHPcjyb-q0",
  authDomain: "logit-188f9.firebaseapp.com",
  databaseURL: "https://logit-188f9.firebaseio.com",
  projectId: "logit-188f9",
  storageBucket: "logit-188f9.appspot.com",
  messagingSenderId: "805126689672",
  appId: "1:805126689672:web:6b54ae716400baf7d7e03d",
  measurementId: "G-C996TJ45JT",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
