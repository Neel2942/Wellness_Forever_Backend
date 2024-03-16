const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cancelAppointmentSchema = new Schema({
    appointmentId: {type:mongoose.Schema.Types.ObjectId,ref:"bookAppointmentModel"},
    reason:{type:String},
    status:{type:String}
});

const cancelAppointmentModel = new mongoose.model("cancelAppointment",cancelAppointmentSchema);
module.exports = cancelAppointmentModel;

