const ContactModel = require('../model/ContactWithUsModel')

const PostContactInfo = (req,res,next)=>{
    
    var contactmodel=new ContactModel.ContactModel();
    contactmodel.storeUserData(req.body.name,req.body.email,req.body.msg,res);
}

const GetContactinfo = (req,res,next)=>{
    var getcontactmodel = new ContactModel.ContactModel();
    getcontactmodel.GetContactUserData(res);
}
module.exports = {
    PostContactInfo,
    GetContactinfo
}