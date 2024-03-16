const cancelAppointmentModel = require("../models/cancelAppointmentModel.js");
const userModel = require("../models/user.js");
const bookAppointmentModel = require("../models/bookAppointmentModel.js");

const adminCancelRequest = async(req,res) => {

    const cancelAppointmentId = req.body.cancelAppointmentId;

    const cancelAppointmentData = await cancelAppointmentModel.findById(cancelAppointmentId);

    if(cancelAppointmentData){
        const appoinmentData = await bookAppointmentModel.findById(cancelAppointmentData.appointmentId);

        if(appoinmentData){
            const doctorData = await userModel.findById(appoinmentData.doctorId);
            const patientData = await userModel.findById(appoinmentData.patientId);

            if(doctorData && patientData){
                const cancelAppointment = await cancelAppointmentModel.findByIdAndUpdate(cancelAppointmentId,{status:"cancelled"});
                if(cancelAppointment){
                    res.send("Cancelled");
                }
            }
        }
    }
}

module.exports = adminCancelRequest;