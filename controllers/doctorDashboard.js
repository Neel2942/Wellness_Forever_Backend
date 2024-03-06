const userModel = require("../models/user.js");
const bookAppointmentModel = require("../models/bookAppointmentModel.js");

const doctorDashboard = async (req, res) => {
  try {
    const doctorId = req.session.userId;
    let appoinmentList = [];
    const user = await userModel.findOne({
      _id: loggedIn,
    });
    if (user != null) {
      const doctorAppoinmentData = await bookAppointmentModel.find({doctorId: doctorId});

      for (let i = 0; i < doctorAppoinmentData.length; i++) {

        let userData = await userModel.findOne({ _id: doctorAppoinmentData[i].patientId });
        let count = i;
        let appoinmentDate = new Date(doctorAppoinmentData[i].date);
        let formattedAppoinmentDate = appoinmentDate.toISOString().split("T")[0];

        appoinmentData = {
          no: ++count,
          appointmentWith: userData.firstName + " " + userData.lastName,
          date: formattedAppoinmentDate,
          time: doctorAppoinmentData[i].time,
          symptoms: doctorAppoinmentData[i].symptoms,
          status: doctorAppoinmentData[i].status,
        },
          appoinmentList.push(appoinmentData);
      }
      res.json(appoinmentList);
    } else {
      res.json("notLoggedIn");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("error");
  }
};

module.exports = doctorDashboard;
