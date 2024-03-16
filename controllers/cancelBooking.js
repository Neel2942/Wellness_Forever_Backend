const cancelAppointmentModel = require("../models/cancelAppointmentModel.js");

const cancelBooking = async(req,res) =>{
    const cancelAppointmentData = {
        appointmentId:req.body.appointmentId,
        reason:req.body.reason,
        status:"requested"
    } 

    const cancelAppointment = await cancelAppointmentModel.create(cancelAppointmentData);

    if(cancelAppointment){
        res.send("Requested");
    }else{
        res.send("failed");
    }
}

module.exports = cancelBooking;