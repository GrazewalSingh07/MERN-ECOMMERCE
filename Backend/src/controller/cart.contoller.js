const express= require("express")
const router= express.Router()
const authenticate= require("../utils/authenticate")

const CartProduct= require("../model/CartProduct.model")


router.get("/",authenticate ,async(req,res)=>{
    try {
       const cart= await  CartProduct.find({userId:req.user._id}).lean().exec()
       return res.status(200).send({cart})
    } catch (error) {
        return res.status(400).send({error})
    }
})

router.post("/",authenticate ,async(req,res)=>{
    try {
       const cart= await  CartProduct.create({
        userId:req.user_id,
        ProductId:req.body.ProductId
       })
       return res.status(200).send({cart,"MESSAGE":"ADDED TO CART"})
    } catch (error) {
        return res.status(400).send({error})
    }
})
 
router.delete("/:id",authenticate,async(req,res)=>{
    try {
        await CartProduct.findByIdAndDelete({_id:req.params.id})
       return res.status(200).send({cart})
    } catch (error) {
        return res.status(400).send({error})
    }
})