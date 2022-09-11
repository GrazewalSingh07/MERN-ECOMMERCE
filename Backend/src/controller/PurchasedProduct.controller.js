const express= require("express")
const router= express.Router()
const authenticate= require("../utils/authenticate")

const PurchasedProduct= require("../model/PurchasedProduct.model")
const CartProduct = require("../model/CartProduct.model")


router.get("/",authenticate ,async(req,res)=>{
    try {
       const cart= await  PurchasedProduct.find({userId:req.user._id}).populate("ProductId").lean().exec()
       return res.status(200).send({cart})
    } catch (error) {
        return res.status(400).send({error})
    }
})
 

router.post("/",authenticate,async(req,res)=>{
    
   
    try {
        
        let temp=req.body
        
       
       temp.forEach(async(el)=>{
         await PurchasedProduct.create({ProductId:el,userId:req.user._id})
       })
        await CartProduct.deleteMany({userId:req.user._id})
        
        return res.status(200).send("product purchased")
    } catch (error) {
        return res.status(401).send(error.message)
    }
})