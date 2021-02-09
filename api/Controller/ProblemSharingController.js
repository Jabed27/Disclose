const problemModel = require('../model/ProblemSharingModel')
//storing 
//getting req from client side then redirecting to the model
const Postproblem = (req,res,next)=>{
    var problemshare = new  problemModel.ProblemShare();
    problemshare.storeSharedProblem(req.body.name,req.body.Location,req.body.Problem_Catagory,req.body.Complain,req.body.Anonymous,req.body.Date,res).then((uid)=>{
        console.log( uid)
        problemshare.storeuserProblemToServer(uid,req.body.name,req.body.Location,req.body.Problem_Catagory,req.body.Complain,req.body.Anonymous,req.body.Date);
        res.status(201).json({
            message:"problem shared succesfully!"
        })
      }).catch(error => {
        console.error(error)
      });
}
//getting all complain
const GetAllComplain=(req,res,next)=>{
    var getproblem = new problemModel.ProblemShare();
   var loadallproblem =  getproblem.GetloadAlluserdproblemfromserver(res)
    res.status(200).json({
        //message:"All contact",
        loadallproblem:loadallproblem
    })
}
// adiministrator will get specifiq complain within the catagory
const GetspecificComplain=(req,res,next)=>{
    var getspecificcomplain = new problemModel.ProblemShare();
    getspecificcomplain.GetSpecificComplain(res)
}
module.exports={
    Postproblem,
    GetAllComplain,
    GetspecificComplain
}