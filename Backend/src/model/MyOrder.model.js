
const mongoose= require("mongoose")

const PurchasedProductSchema=new mongoose.Schema({
    productId:{type:mongoose.Types.ObjectId, ref:"product",required:true},
    userId:{type:mongoose.Types.ObjectId, ref:"user",required:true}
})
const PurchasedProduct= mongoose.model("purchasedProduct",PurchasedProductSchema)

module.exports=PurchasedProduct