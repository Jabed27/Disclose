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
            resolve(xhr.response);
            console.log(xhr.response)
        };
        xhr.send(JSON.stringify(data));
    });
    alert('problem sent successfully!')
    return promise;
}
//sending req for storing problem to db
const sendproblem=()=>{
    //var emailvalue = document.getElementById('InputEmail1').value;
    var selarea = document.getElementById('areaSelect');
    //console.log(selarea.value );//hatirpool
    var opt1 = selarea.options[selarea.selectedIndex];
    //console.log("area"+opt1.value );//hatirpool
    //console.log( "area"+opt1.text );//hatirpool
    var selprob = document.getElementById('problemSelect');
   // console.log( selprob.value );//wasa
    var opt = selprob.options[selprob.selectedIndex];
   // console.log("prob"+ opt.value );//wasa
    //console.log( "prob"+opt.text );//wasa
    var selanonymous = document.getElementById('anonymousSelect');
    //console.log( selanonymous.value );//true
    var namevalue = document.getElementById('Inputname').value;
    var msgvalue = document.getElementById('inputTextarea').value;
    //console.log("hi"+document.getElementById('inputTextarea').value);
    //console.log("hi"+document.getElementById('Inputname').value);
    let date_ob = new Date();
 let date = ("0" + date_ob.getDate()).slice(-2);
 let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
 let year = date_ob.getFullYear();
 let formatted_date = date+"-"+month+"-"+year;
    if(namevalue==""||msgvalue==""){
         alert("fill all fields");
    }else{
        sendHttpRequest('POST','http://localhost:3000/disclose/api/problemshare/store',{
            name:namevalue,
            Location:opt1.value,
            Problem_Catagory:opt.value,
            Complain:msgvalue,
            Anonymous:selanonymous.value,
            Date:formatted_date
        });
    }
    
};
document.getElementById("post-btn").addEventListener('click', e => {
    e.preventDefault();
    auth.onAuthStateChanged(function(user){
        if(user){
            sendproblem();
        }else{
               alert("no user active, you have to loged in to share problems")
                //window.location.replace("/signin")
            
        }
    })
    
});