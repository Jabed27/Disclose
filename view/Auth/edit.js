//connecting firebase
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
               alert("You have edited your information");
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
//sending http req to edit user data
const sendData=()=>{
    var fname = document.getElementById("validationCustom01").value;
    var lname = document.getElementById("validationCustom02").value;
    var nid = document.getElementById("validationCustom04").value;
    var address = document.getElementById("validationCustom05").value;
    //var email = document.getElementById("validationCustom03").value;
    //var password = document.getElementById("validationCustom06_password").value;
    console.log("hi"+document.getElementById('validationCustom01').value);
    console.log("hi"+document.getElementById('validationCustom04').value);
    if(fname=="" ||lname ==""||nid==""||address==""){
         alert('fill all the field please');
    }else{
        auth.onAuthStateChanged(function(user){
            if(user){
              localStorage.setItem("First_Name",fname);
              localStorage.setItem("Last_Name",lname);
              //localStorage.setItem("Email",email);
              localStorage.setItem("Address",address);
              localStorage.setItem("NID",nid);
              var uid = localStorage.getItem("userid");
              console.log(user.uid);
                sendHttpRequest('PUT','http://localhost:3000/disclose/api/auth/edit',{
                    Fname:fname,
                    Lname:lname,
                    //email:email,
                    address:address,
                    nid:nid,
                    //pass:password,
                    userid:uid
                });
            }
            else{
                alert("No user is active, you have to login to share problems")
            }
        })
       
        
    }
    
  };

/*document.getElementById("edit").addEventListener('click', e => {
    e.preventDefault();
   
    sendData();
  });*/