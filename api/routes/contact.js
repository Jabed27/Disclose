//express has become the standard server framework for node. js
const express = require('express')
const router = express.Router()
const contacts =[]
const contactWithUsController = require('../Controller/ContactWithUsController')

//Get who messaged to the admin
router.get('/read',contactWithUsController.GetContactinfo)

//when user go to contact to the admin
router.post('/store',contactWithUsController.PostContactInfo)

module.exports = router
