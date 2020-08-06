//importing express
const express = require('express');
const router = require('./api/routes/contact');
const morgan = require('morgan')
//client give value in url than it needs to extrected
//that why body parser is used
const bodyParser = require('body-parser')
//importing contact routes
const contactRoute = require('./api/routes/contact')
// express application will be created
const app = express();
// morgan will formate how we want to see the data
app.use(morgan("dev"))//devloment mode e  dekhabe
//to use body-parser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
// server should listen at some point. This point can be given by us 
// or if we host it then it will reconize it
const PORT = process.env.PORT || 3000

app.use('/disclose/api/contacts',contactRoute)
app.listen(PORT,()=>{      // now server is running
    console.log(`Server is running on PORT ${PORT}`)
})          
// route created
app.get('/',(req,res)=>{
    res.send('<div><h1>Hello server is running jabu</h1><p>Hello jabed</p></div>')
})