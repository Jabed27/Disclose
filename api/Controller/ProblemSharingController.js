const problemModel = require('../model/ProblemSharingModel')
//storing 
const Postproblem = (req,res,next)=>{
    var problemshare = new  problemModel.ProblemShare();
    problemshare.storeSharedProblem(req.body.name,req.body.Location,req.body.Problem_Catagory,req.body.Complain,req.body.Anonymous,res)
}
//getting all complain
const GetAllComplain=(req,res,next)=>{
    var getproblem = new problemModel.ProblemShare();
    getproblem.GetAllstoredComplain(res)
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