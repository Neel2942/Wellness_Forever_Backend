const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String},
    password:{type:String},
    phoneNumber:{type:Number},
    age:{type:Number},
    userType:{type:String},
    specialization:{type:String},
    reportId:{type:Number},
    prescriptionId:{type:Number},
    description:{type:String}
});

userSchema.pre("save",function(next){
    const user = this;

    bcrypt.hash(user.password,10,(err,hash)=>{
        user.password = hash;
        next();
    })
});

const userModel = new mongoose.model("user",userSchema);
module.exports = userModel;

