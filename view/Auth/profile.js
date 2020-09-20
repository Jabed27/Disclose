window.setUserDetailsOnProfile= function()
{

    var fname=document.getElementById("firstname");
    var lname=document.getElementById("lastname");
    var email=document.getElementById("useremail");
    var nid=document.getElementById("usernid");
    var location=document.getElementById("location");
   console.log(location,nid);
    fname.innerHTML=localStorage.getItem("First_Name");
    lname.innerHTML= localStorage.getItem("Last_Name");
    email.innerHTML=localStorage.getItem("Email");
    nid.innerHTML = localStorage.getItem("NID");
    location.innerHTML = localStorage.getItem("Address");
    
  }
  setUserDetailsOnProfile();