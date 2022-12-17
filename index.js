const dotenv = require('dotenv')
dotenv.config()
require('./model/config')
const express = require('express');
const app = express();
const { request } = require('http');
const router = require('./routes/commanRoutes');3
var bodyParser = require('body-parser');
const testRouter = require('./validation')

app.use(bodyParser.json());
app.use('/',router)

app.use('/test',testRouter)

app.get('/', function (req, res) {
    res.send("Welcome to node js world")
})

app.listen(process.env.PORT, function (req, res) {
    console.log(`server is running on port :  ${process.env.PORT}`);
});
