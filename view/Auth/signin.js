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
  firebase.analytics();
  const auth = firebase.auth();
  function signin(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    console.log(email.value,password.value)
    const promise = auth.signInWithEmailAndPassword(email.value,password.value).then(()=>{
        auth.onAuthStateChanged(function(user){
            if(user){
                var email = user.email;
                alert("Active user"+email);
                //is signed in
                window.location.replace("/");
                
            }else{
                alert("No user");
                window.location.replace("/signup");
                //no user
            }
        })
    });
    
    promise.catch(e=>alert(e.message));
    //state change
    
   
}