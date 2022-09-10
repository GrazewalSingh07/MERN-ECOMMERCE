
const express= require("express")
const User = require("../model/user.model")
const router= express.Router()
const {body, validationResult}=require("express-validator")
router.post("/",
    
body("email").not().isEmpty().withMessage("Please enter email").isEmail().withMessage("Please enter valid email").custom(async(value)=>{
    let user= await User.findOne({email:value}).lean().exec()
    if(user){
       throw new Error("Email already exists")
    }
    return true
    
   }),
   body("role").not().isEmpty().withMessage("Please enter role of the user").custom((value)=>{
    if(value!=="admin"||value!=="user"){
        throw new Error("Role could be either admin or user")
    }
    return true
   })
   ,

body("password").not().isEmpty().withMessage("Please enter password").custom((value)=>{
    
    let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(!value.match(regex)||value.length<8){
                throw new Error("Password must be strong");
            }
         return true;
    
}), body("fullname").not().isEmpty().withMessage("Please enter fullname"),async(req,res)=>{
    try {
        const errors= validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).send({error:errors.array()})
        }
        
        await User.create(req.body)
        return res.status(201).send("User created")
    } catch (error) {
        if(error.code===11000){
            return res.status(500).send("Register successful please login")
         }
         return res.status(400).send(error)
    }

})
module.exports=router