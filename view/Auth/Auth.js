// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

  async function signup(){
      var fname = document.getElementById("validationCustom01").value;
      var lname = document.getElementById("validationCustom02").value;
      var nid = document.getElementById("validationCustom04").value;
      var address = document.getElementById("validationCustom05").value;
      var email = document.getElementById("validationCustom03");
      var password = document.getElementById("validationCustom06_password");
      console.log(email.value);
      console.log(address);
      console.log(nid);
      console.log(fname)
      if(fname=="" ||lname ==""||nid==""||address==""||email.value==""||password.value==""){
        alert("Fill out all the form!");
      }else{
          
          const promise =await auth.createUserWithEmailAndPassword(email.value,password.value);
          promise.catch(e=>alert(e.message));
          alert("registered!");
      }
      
  }
  
const sendHttpRequest = (method, url, data) =>{
    const promise = new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType = 'json'
        if(data){
            xhr.setRequestHeader('Content-Type','application/json');
        
        }
        xhr.onload = () =>{
            if (xhr.status >= 200 || xhr.status<=210) { 
                window.location.replace("/signin"),alert("You are signed up");
             } else { 
               alert(xhr.response)
             }
            resolve(xhr.response);
            console.log(xhr.response)
        };
        xhr.send(JSON.stringify(data));
    });
    //alert('contact successfully!')
    return promise;
}

  const sendData=()=>{
    var fname = document.getElementById("validationCustom01").value;
    var lname = document.getElementById("validationCustom02").value;
    var nid = document.getElementById("validationCustom04").value;
    var address = document.getElementById("validationCustom05").value;
    var email = document.getElementById("validationCustom03").value;
    var password = document.getElementById("validationCustom06_password").value;
    console.log("hi"+document.getElementById('validationCustom01').value);
    console.log("hi"+document.getElementById('validationCustom04').value);
    if(fname=="" ||lname ==""||nid==""||address==""||email==""||password==""){
         alert('fill all the field please');
    }else{
        sendHttpRequest('POST','http://localhost:3000/disclose/api/auth/signup',{
            Fname:fname,
            Lname:lname,
            email:email,
            address:address,
            nid:nid,
            pass:password,
        });
        
    }
    
};

  document.getElementById("register").addEventListener('click', e => {
    e.preventDefault();
    signup();
    sendData();
});
