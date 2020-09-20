const express = require('express')
const router = express.Router()
const UserController = require('../Controller/AuthenticationController')
//sign up post request
router.post('/signup',UserController.PostuserInfoSignUp)
router.put('/edit',UserController.postEdituserinfo)
router.get('/readuser',UserController.readuserdata)
//router.post('/login',UserController.PostUserInfoLogin)
module.exports = router