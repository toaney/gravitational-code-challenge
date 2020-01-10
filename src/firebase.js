import firebase from 'firebase/app';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC27qgocJC1IfkbFOtbBjs-ODR5bvFTm1g",
    authDomain: "hacker-news-clone-b62e8.firebaseapp.com",
    databaseURL: "https://hacker-news-clone-b62e8.firebaseio.com",
    projectId: "hacker-news-clone-b62e8",
    storageBucket: "hacker-news-clone-b62e8.appspot.com",
    messagingSenderId: "305335182009",
    appId: "1:305335182009:web:ea7b743badf2f54270b168"
  };
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  firebase.initializeApp({
    authDomain: "hacker-news.firebaseio.com",
    databaseURL: "https://hacker-news.firebaseio.com",
    projectId: "hacker-news-clone-b62e8"
  });

export default firebase