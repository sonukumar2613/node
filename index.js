const express = require('express')
const app = express()
const cors = require('cors')
const http = require('http')


app.get('/',(req,res)=>{
   res.send("hi, I am here")
})


const httpServer = http.createServer(app)
.listen(9000, function (req, res) {
    console.log("server running at 9000")
})