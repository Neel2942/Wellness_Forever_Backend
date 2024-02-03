const mongoose = require('mongoose');
const Schema = mongoose.Schema
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

const patientModel = new mongoose.model("patient",patientSchema);
module.exports = patientModel;

