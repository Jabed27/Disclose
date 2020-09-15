const bcrypt = require('bcrypt');
const { UserModel } = require('../model/AuthenticationModel');
const userInfoModel = require('../model/AuthenticationModel')
const PostuserInfoSignUp = (req,res,next)=>{
    const firstname=req.body.Fname;
    const lastname = req.body.Lname;
    const email=req.body.email;
    const address=req.body.address;
    const nid = req.body.nid;
    const password = req.body.pass;
    bcrypt.hash(req.body.pass,10,(err,hash)=>{
        if(err){
            res.json({
                error:err,
            })
        }
        var signupuser = new userInfoModel.UserModel()
        signupuser.StoreSingnUpUser(firstname,lastname,email,address,nid,hash).then(()=>{
            
            res.status(200).json({
                message:"user sign up successfully",
                
            })
    
        }).catch(error => {
            console.error(error)
            res.status(404).json({
                message:'Data could not be stored due to  '+error.message,
               
            })
        });
        
    })
        
}

module.exports = {
    PostuserInfoSignUp,
    
    
}