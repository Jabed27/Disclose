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
    const id = req.body.userid;
    bcrypt.hash(req.body.pass,10,(err,hash)=>{
        if(err){
            res.json({
                error:err,
            })
        }
        var signupuser = new userInfoModel.UserModel()
        signupuser.StoreSingnUpUser(firstname,lastname,email,address,nid,hash,id).then(()=>{
            
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
//getting req from client side then redirecting to the model
const postEdituserinfo = (req,res,next)=>{
    const firstname=req.body.Fname;
    const lastname = req.body.Lname;
    //const email=req.body.email;
    const address=req.body.address;
    const nid = req.body.nid;
    //const password = req.body.pass;
    const id = req.body.userid;
    //console.log(email)
    console.log(id);
   
       
        var signupuser = new userInfoModel.UserModel()
        signupuser.EditUser(firstname,lastname,address,nid,id).then(()=>{
            
            res.status(200).json({
                message:"user edited his/her information successfully",
                
            })
    
        }).catch(error => {
            console.error(error)
            res.status(404).json({
                message:'Data could not be stored due to  '+error.message,
               
            })
        });
        
  
}
const readuserdata = (req,res,next)=>{
    const uid=req.params.id;
    
    
    var user=new userInfoModel.UserModel().readUserData(uid);
    //console.log("lel:: "+JSON.stringify(user));
    res.status(202).json({
            message:'User data read successfully',
            uid:user['uid'],
            First_Name:user['fname'],
            Last_Name:user['lname'],
            Address:user['address'],
            NID:user['nid']
        })
}
module.exports = {
    PostuserInfoSignUp,
    postEdituserinfo,
    readuserdata
    
}