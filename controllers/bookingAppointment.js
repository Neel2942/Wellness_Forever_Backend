const bookingAppointmentModel = require("../models/bookAppointmentModel.js");
const {sessionModel} = require('../models/session.js');
const bookingAppointment = async (req, res) => {
  try {
    const userId = await sessionModel.find();
    const bookingAppointmentData = {
      patientId: userId[0].userId,
      doctorId: req.body.doctorId,
      date: req.body.date,
      time: req.body.time,
      symptoms: req.body.symptoms,
      status: req.body.status,
    };
    const newAppointment = new bookingAppointmentModel(bookingAppointmentData);
    await newAppointment.save();
    res.send("Booked");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Booking Failed" });
  }
};

module.exports = bookingAppointment;
