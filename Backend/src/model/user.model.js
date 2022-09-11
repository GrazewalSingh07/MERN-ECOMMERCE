const mongoose= require("mongoose");
const bcrypt=require("bcrypt")
const userSchema=new mongoose.Schema({
    
    email:{type:String,required:true, unique:true},
    password:{type:String, required:true},
    fullname:{type:String, required:true},
    phone:{type:Number, required:false},
    role:{type:String,required:true},
    // avatar:{type:String, required:false},
    // cloudinary_Id:{type:String, required:false}
   

},{
    timestamps:true
})


userSchema.pre("save" ,function(next){ 
    const hash= bcrypt.hashSync(this.password, 8);
    this.password=hash
    return next()
})
 
 
userSchema.methods.checkPassword=function(password){
    return bcrypt.compareSync(password, this.password)
}
const User= mongoose.model("user", userSchema)
module.exports= User