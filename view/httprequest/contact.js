//const { resolve } = require("path");
//const { url } = require("inspector");

const postbtn = document.getElementById('post-btn');

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
    alert('contact successfully!')
    return promise;
}
//sending req for storing to database the contact msg
const sendData=()=>{
    var emailvalue = document.getElementById('InputEmail1').value;
    var namevalue = document.getElementById('Inputname').value;
    var msgvalue = document.getElementById('inputTextarea').value;
    console.log("hi"+document.getElementById('inputTextarea').value);
    console.log("hi"+document.getElementById('Inputname').value);
    sendHttpRequest('POST','http://localhost:3000/disclose/api/contacts/store',{
        name:namevalue,
        email:emailvalue,
        msg:msgvalue
    });
};
//postbtn.addEventListener('click',sendData);
document.getElementById("post-btn").addEventListener('click', e => {
    e.preventDefault();
    sendData();
});