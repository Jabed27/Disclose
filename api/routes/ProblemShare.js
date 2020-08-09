const express = require('express')
const problemsharerouter = express.Router()
const problemshareController = require('../Controller/ProblemSharingController')

//all ther problem will be displayed in afterlogin page

problemsharerouter.get('/read',problemshareController.GetAllComplain)

//if anyone wants to post the problem
problemsharerouter.post('/store',problemshareController.Postproblem)

//aminstrator will route specific complain
problemsharerouter.get('/admistrator/read',problemshareController.GetspecificComplain)

module.exports = problemsharerouter