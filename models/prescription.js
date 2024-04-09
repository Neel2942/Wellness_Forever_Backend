const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
    appointmentId: {type:mongoose.Schema.Types.ObjectId,ref:"bookAppointmentModel"},
    medicine:{type:Array},
    note:{type:String}
});

const prescriptionModel = new mongoose.model("prescription",prescriptionSchema);
module.exports = prescriptionModel;

