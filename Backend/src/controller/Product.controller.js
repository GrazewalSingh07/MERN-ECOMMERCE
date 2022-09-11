const express= require("express")
const Product = require("../model/Product.model")
const authenticate = require("../utils/authenticate")
const router= express.Router()


router.get("/",async(req,res)=>{
    try {
        const page=req.query.page||1
        const pagesize=req.query.pagesize||10

       const skip=(page-1)*pagesize
       
        const totalpage=Math.ceil(await Product.find().countDocuments()/pagesize)
        const products= await Product.find().skip(skip).limit(pagesize).lean().exec()
        return res.status(200).send({products,totalpage})
    } catch (error) {
         return res.status(401).send({error})
    }
})
 
router.get("/:category",async(req,res)=>{
    try {
       
        const page=req.query.page||1
        const pagesize=req.query.pagesize||10

       const skip=(page-1)*pagesize
       
        const totalpage=Math.ceil(await Product.find().countDocuments()/pagesize)
        const products= await Product.find({category:req.params.category}).skip(skip).limit(pagesize).lean().exec()

        return res.status(200).send({products,totalpage})
    } catch (error) {
         return res.status(401).send({error})
    }
})

router.get("/find/:prod",async(req,res)=>{
     
    try {
        const query=req.params.prod
      
    let product= await Product.find({ title: new RegExp('.*' +   query + '.*')}).lean().exec() 
        if(product.length==0){
             product= await Product.find({ category: new RegExp('.*' +   query + '.*')}).lean().exec() 
             if(product.length==0){
                product=await Product.find({ brand: new RegExp('.*' +   query + '.*')}).lean().exec() 
             }
        }

        return res.status(200).send({product})
    } catch (error) {
        return res.status(400).send({error})
    }
})
module.exports= router