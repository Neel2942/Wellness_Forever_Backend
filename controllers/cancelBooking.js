const cancelAppointmentModel = require("../models/cancelAppointmentModel.js");
const bookAppointmentModel = require("../models/bookAppointmentModel.js");

const cancelBooking = async(req,res) =>{
    const cancelAppointmentData = {
        appointmentId:req.body.appointmentId,
        reason:req.body.reason,
        status:"requested"
    } 

    const cancelAppointment = await cancelAppointmentModel.create(cancelAppointmentData);
    const bookAppointmentStatus = await bookAppointmentModel.findByIdAndUpdate(cancelAppointmentData.appointmentId,{status:"Requested"});

    if(cancelAppointment && bookAppointmentStatus){
        res.send("Requested");
    }else{
        res.send("failed");
    }
}

module.exports = cancelBooking;