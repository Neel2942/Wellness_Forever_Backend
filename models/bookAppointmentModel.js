const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookAppointmentSchema = new Schema({
    fullName:{type:String},
    email:{type:String},
    phoneNumber:{type:Number},
    address:{type:String},
    category:{type:String},
    date:{type:Date},
    time:{type:String},
    reason:{type:String},
});

const bookAppointmentModel = new mongoose.model("bookAppointment",bookAppointmentSchema);
module.exports = bookAppointmentModel;

