const express= require("express")
var bodyParser = require('body-parser');
const cors= require("cors")
const app= express()

app.use(express.json())

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors())





const Register= require("./controller/Register.conteoller")

app.use("/register", Register)

module.exports= app