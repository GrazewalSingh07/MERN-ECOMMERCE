const express= require("express")
var bodyParser = require('body-parser');
const cors= require("cors")
const app= express()

app.use(express.json())

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cors())





const Register= require("./controller/Register.conteoller")
const Products= require("./controller/Product.controller")
const login= require("./controller/Login.controller")
app.use("/products",Products)

app.use("/register", Register)
app.use("/login", login)
module.exports= app