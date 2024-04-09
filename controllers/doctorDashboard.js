const userModel = require("../models/user.js");
const bookAppointmentModel = require("../models/bookAppointmentModel.js");

const doctorDashboard = async (req, res) => {
  try {
    const doctorId = req.session.userId;
    let appoinmentList = [];
    const doctorAppoinmentData = await bookAppointmentModel.find({doctorId: doctorId});

    for (let i = 0; i < doctorAppoinmentData.length; i++) {

      let userData = await userModel.findOne({ _id: doctorAppoinmentData[i].patientId });
      let count = i;
      let appoinmentDate = new Date(doctorAppoinmentData[i].date);
      let formattedAppoinmentDate = appoinmentDate.toISOString().split("T")[0];

      appoinmentData = {
        no: ++count,
        appointmentId:doctorAppoinmentData[i]._id,
        appointmentWith: userData.firstName + " " + userData.lastName,
        date: formattedAppoinmentDate,
        time: doctorAppoinmentData[i].time,
        symptoms: doctorAppoinmentData[i].symptoms,
        status: doctorAppoinmentData[i].status,
        userType: "doctor"
      },
        appoinmentList.push(appoinmentData);
    }
    res.json(appoinmentList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = doctorDashboard;
