const session = require("express-session");
const bookingAppointmentModel = require("../models/bookAppointmentModel.js");

const bookingAppointment = async (req, res) => {

    try{
        const bookingAppointmentData = {
            patientId:req.session.userId,
            doctorId:req.body.doctorId,
            date:req.body.date,
            time:req.body.time,
            symptoms:req.body.symptoms,
            status:req.body.status
        };
        const newAppointment = new bookingAppointmentModel(bookingAppointmentData);
        await newAppointment.save();
        res.json("Booked");
    }
    catch (error) {
        console.error('Error booking appointment:', error);
        res.json("Booking Failed");
    }
    
}

module.exports = bookingAppointment;