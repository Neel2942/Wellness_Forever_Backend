const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const patientSchema = new Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String},
    password:{type:String},
    phoneNumber:{type:Number},
    age:{type:Number},
    userType:{type:String},
    reportId:{type:Number},
    prescriptionId:{type:Number},
});

patientSchema.pre("save",function(next){
    const patient = this;

    bcrypt.hash(patient.password,10,(err,hash)=>{
        patient.password = hash;
        next();
    })
});

const patientModel = new mongoose.model("patient",patientSchema);
module.exports = patientModel;

