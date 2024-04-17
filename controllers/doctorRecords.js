const userModel = require("../models/user.js");
const bookAppointmentModel = require("../models/bookAppointmentModel.js");
const prescriptionModel = require("../models/prescription.js");
const {sessionModel} = require("../models/session.js");

const doctorRecords = async (req, res) => {
  try {
    const userId = await sessionModel.find();;
    let recordList = [];
    const doctorAppoinmentData = await bookAppointmentModel.find({
      doctorId: userId,
      status: "Completed",
    });

    for (let i = 0; i < doctorAppoinmentData.length; i++) {
      let userData = await userModel.findOne({
        _id: doctorAppoinmentData[i].patientId,
      });
      let prescriptionData = await prescriptionModel.findOne({
        appointmentId: doctorAppoinmentData[i]._id,
      });
      let count = i;
      let appoinmentDate = new Date(doctorAppoinmentData[i].date);
      let formattedAppoinmentDate = appoinmentDate.toISOString().split("T")[0];

      recordData = {
        no: ++count,
        appointmentId: doctorAppoinmentData[i]._id,
        appointmentWith: userData.firstName + " " + userData.lastName,
        date: formattedAppoinmentDate,
        time: doctorAppoinmentData[i].time,
        symptoms: doctorAppoinmentData[i].symptoms,
        medicine: prescriptionData.medicine,
        note: prescriptionData.note,
        userType: "doctor",
      }
        recordList.push(recordData);
    }
    res.json(recordList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = doctorRecords;
