const mongoose= require("mongoose")

const ProductSchema= new mongoose.Schema({
    title:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    description:{type:String,required:true},
    stock:{type:String,required:true},
    discountPercentage:{type:Number,required:true},
    rating:{type:Number,required:true},
    brand:{type:String,required:true},
    category:{type:String,required:true},
    thumbnail:{type:String,required:true},
    images:[{type:String,required:true}]
})

const Product= mongoose.model("product", ProductSchema)

module.exports=Product