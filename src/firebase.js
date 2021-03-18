import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBoe6it_uOheZyAUIvf37tqvDLlJCmQjps",
  authDomain: "twitter-clone-35b12.firebaseapp.com",
  projectId: "twitter-clone-35b12",
  storageBucket: "twitter-clone-35b12.appspot.com",
  messagingSenderId: "962515042322",
  appId: "1:962515042322:web:139ba0f3acc7839a1118cb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.fireStore();

export default database;
