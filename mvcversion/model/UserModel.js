const { Schema } = require("mongoose")
const mongoose=require("mongoose")
const UserType={
    username:String,
    password:String,
    age:Number
}

const UserModel=mongoose.model("user",new Schema(UserType))
module.exports=UserModel