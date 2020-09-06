
//const getalldata = require('../../api/model/ContactWithUsModel');
const getbtn = document.getElementById('get-btn');
const getData=()=>{
    /*fetch('http://localhost:3000/disclose/api/contacts/read').then(response => {
        console.log(response)
    })*/
    /*var getdata = new getalldata.ContactModel()
    getdata.getDataForAdmin()*/
    const xhr = new XMLHttpRequest();
    xhr.open('GET','http://localhost:3000/disclose/api/contacts/read');
    xhr.setRequestHeader("Content-Type","application/json;charset=UTF-8");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = ()=>{
        console.log(xhr.response);
    } 
    
}
//<!--<section id = "control-center">
//<button id = 'get-btn'>Get Data</button>
//</section>-->
//getbtn.addEventListener('click',getData);