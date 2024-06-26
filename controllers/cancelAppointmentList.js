const bookAppointmentModel = require("../models/bookAppointmentModel.js");
const cancelAppointmentModel = require("../models/cancelAppointmentModel.js");
const userModel = require("../models/user.js");

const cancelAppointmentList = async (req, res) => {
  try {
    const appoinmentList = await bookAppointmentModel.find({
      status: "Requested",
    });

    let cancelList = [];
    if (appoinmentList && cancelAppointmentList) {
      for (let i = 0; i < appoinmentList.length; i++) {
        let cancelAppointmentList = await cancelAppointmentModel.findOne({
          appointmentId: appoinmentList[i]._id,
        });
        let patientData = await userModel.findById(appoinmentList[i].patientId);
        let doctorData = await userModel.findById(appoinmentList[i].doctorId);
        let cancelAppoinmentDate = new Date(appoinmentList[i].date);
        let formattedCancelAppoinmentDate = cancelAppoinmentDate.toISOString().split("T")[0];
        cancelListData = {
          cancelAppointmentId: cancelAppointmentList._id,
          patientName: patientData.firstName + " " + patientData.lastName,
          doctorName:
            "Dr" + " " + doctorData.firstName + " " + doctorData.lastName,
          time: appoinmentList[i].time,
          date: formattedCancelAppoinmentDate,
          reason: cancelAppointmentList.reason,
        },
          cancelList.push(cancelListData);
      }
      res.send(cancelList);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Booking Failed" });
  }
};

module.exports = cancelAppointmentList;
