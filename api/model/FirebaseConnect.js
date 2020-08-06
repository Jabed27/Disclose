var firebase = require("firebase/app");
const { database } = require("firebase/app");
// dependencies of firebase authentication
require("firebase/auth");
// dependencies of firebase firestore
require("firebase/firestore");
require("firebase/analytics");
// Your web app’s Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBXhlkAZkw1Z_9Ic-tjLzo5y6QHtg2pB8w",
    authDomain: "disclose-2bf74.firebaseapp.com",
    databaseURL: "https://disclose-2bf74.firebaseio.com",
    projectId: "disclose-2bf74",
    storageBucket: "disclose-2bf74.appspot.com",
    messagingSenderId: "715254285316",
    appId: "1:715254285316:web:3ddf4116f1b9d3c0572151",
    measurementId: "G-79Y1RVNQNG"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//firebase.analytics();


module.exports=firebase;