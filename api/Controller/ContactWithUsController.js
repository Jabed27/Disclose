const { json } = require('body-parser');
const ContactModel = require('../model/ContactWithUsModel')
//getting req from client side then redirecting to the model
const PostContactInfo = (req,res,next)=>{
    
    const username=req.body.name;
    const useremail=req.body.email;
    const message=req.body.msg;
    console.log('username'+username);
    var contactmodel=new ContactModel.ContactModel();
    //after storing to the firebase than it will store to the server
    contactmodel.storeUserData(req.body.name,req.body.email,req.body.msg,res).then((uid)=>{
        console.log(uid);
        contactmodel.storeuserDataToServer(uid,username,useremail,message);
        res.status(200).json({
            message:"Contact message store successfully",
            
        })

    });
    
}
//getting req from client side then redirecting to the model
const GetContactinfo = (req,res,next)=>{
    var getcontactmodel = new ContactModel.ContactModel();
    //getcontactmodel.GetContactUserData();
    //server theke read korbe
   var  loadallcontact = getcontactmodel.GetloadAllcontactuserdata();
   res.status(200).json({
       //message:"All contact",
       loadallcontact:loadallcontact
   })
}
module.exports = {
    PostContactInfo,
    GetContactinfo
}