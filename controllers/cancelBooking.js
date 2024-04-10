const cancelAppointmentModel = require("../models/cancelAppointmentModel.js");
const bookAppointmentModel = require("../models/bookAppointmentModel.js");

const cancelBooking = async (req, res) => {
  try {
    const cancelAppointmentData = {
      appointmentId: req.body.appointmentId,
      reason: req.body.reason,
      status: "Requested",
    };

    const cancelAppointment = await cancelAppointmentModel.create(
      cancelAppointmentData
    );
    const bookAppointmentStatus = await bookAppointmentModel.findByIdAndUpdate(
      cancelAppointmentData.appointmentId,
      { status: "Requested" }
    );

    if (cancelAppointment && bookAppointmentStatus) {
      res.send("Requested");
    } else {
      res.send("Failed");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Booking Failed" });
  }
};

module.exports = cancelBooking;
