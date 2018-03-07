import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCk5fxtDCXuIxO8gLMZH0n1Vp6O2yq1iLg",
  authDomain: "reactredux-firebase.firebaseapp.com",
  databaseURL: "https://reactredux-firebase.firebaseio.com",
  projectId: "reactredux-firebase",
  storageBucket: "reactredux-firebase.appspot.com",
  messagingSenderId: "65004726937"
};
firebase.initializeApp(config);

export const database = firebase.database().ref('posts/');