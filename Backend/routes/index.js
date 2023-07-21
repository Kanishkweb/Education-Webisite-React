const main = require('./db')

// Express Server Setup

const express = require('express')
var cors = require('cors')
const app = express()
const port = 8000
app.use(cors())

// Endpoints

app.get('/',(req,res)=>{
    res.send("Hello World")
})

//MiddleWare

app.use(express.json())

//Avalaible Routes

app.use('/api/auth', require('./auth'))
// app.use('api/course',require('./course'))

// Listening the Port 

app.listen(port,()=>{
    console.log(`Education.com is listening on the port ${port}`)
})

// Calling the MongoDB Databse connection 
main().catch((error) => console.log(error))