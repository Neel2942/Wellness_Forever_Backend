const bookingAppointmentModel = require("../models/bookAppointmentModel.js");

const bookingAppointment = async (req, res) => {

    try{
        const bookingAppointmentData = {
            fullName:req.body.fullName,
            email:req.body.email,
            phoneNumber:req.body.phoneNumber,
            address:req.body.address,
            category:req.body.category,
            date:req.body.date,
            time:req.body.time,
            reason:req.body.reason,
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