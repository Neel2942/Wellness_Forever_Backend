const mongoose = require('mongoose');
const Schema = mongoose.Schema
const pateintSchema = new Schema({
    firstName:{type:String},
    lastName:{type:String},
    email:{type:String},
    phoneNumber:{type:Number},
    age:{type:Number},
    userType:{type:String},
    reportId:{type:Number},
    prescriptionId:{type:Number},
});

const pateintModel = new mongoose.model("patient",pateintSchema);
module.exports = pateintModel;

