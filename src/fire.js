import firebase from 'firebase'
  var config = {
    apiKey: "AIzaSyAF_EGa71IdxHKHa2_kyuuWxKRo4EJJuJI",
    authDomain: "social-media-app-8c478.firebaseapp.com",
    databaseURL: "https://social-media-app-8c478.firebaseio.com",
    projectId: "social-media-app-8c478",
    storageBucket: "",
    messagingSenderId: "755659475867"
  };

let fire = firebase.initializeApp(config)

export default fire
