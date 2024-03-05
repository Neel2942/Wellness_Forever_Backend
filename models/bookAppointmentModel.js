const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookAppointmentSchema = new Schema({
    patientId: {type:mongoose.Schema.Types.ObjectId,ref:"userModel"},
    doctorId: {type:mongoose.Schema.Types.ObjectId,ref:"userModel"},
    date:{type:Date},
    time:{type:String},
    symptoms:{type:String},
    status:{type:String},
});

const bookAppointmentModel = new mongoose.model("bookAppointment",bookAppointmentSchema);
module.exports = bookAppointmentModel;

