require('dotenv').config()
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const userRouter = require('./router/userRouter');

//user api
//`http://localhost:8080/api/v1/generateOtp`,
//`http://localhost:8080/api/v1/verifyOtp`,


app.use('/api/v1', userRouter)


app.get('/', (req, res) => {
    res.send('<h1>Testing</h1>')
})


const connectDb = require("./config/configDb");

//running the nodejs application to the server no need of index.js
app.listen(process.env.port, (err) => {
    if(err){
        console.log(err);
    }
    console.log(`SERVER RUNNNING ON PORT 8080`);
    connectDb()
})

module.exports = app