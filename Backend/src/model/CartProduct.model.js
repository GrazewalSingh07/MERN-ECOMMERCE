
const mongoose= require("mongoose")

const CartProductSchema=new mongoose.Schema({
    ProductId:{type:mongoose.Types.ObjectId, ref:"product",required:true},
    userId:{type:mongoose.Types.ObjectId, ref:"user",required:true}
})
const CartProduct= mongoose.model("CartProduct",CartProductSchema)

module.exports=CartProduct