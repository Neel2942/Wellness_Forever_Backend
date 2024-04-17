const userModel = require("../models/user.js");
const bookAppointmentModel = require("../models/bookAppointmentModel.js");
const prescriptionModel = require("../models/prescription.js");
const {sessionModel} = require("../models/session.js");

const patientRecords = async (req, res) => {
  try {
    const userId = await sessionModel.find();;
    let recordList = [];

    const patientAppoinmentData = await bookAppointmentModel.find({
      patientId: userId,
      status: "Completed",
    });

    for (let i = 0; i < patientAppoinmentData.length; i++) {
      let userData = await userModel.findOne({
        _id: patientAppoinmentData[i].doctorId,
      });
      let prescriptionData = await prescriptionModel.findOne({
        appointmentId: patientAppoinmentData[i]._id,
      });
      let count = i;
      let appoinmentDate = new Date(patientAppoinmentData[i].date);
      let formattedAppoinmentDate = appoinmentDate.toISOString().split("T")[0];

      recordData = {
        no: ++count,
        appointmentWith: "Dr" + " " +userData.firstName + " " + userData.lastName,
        date: formattedAppoinmentDate,
        time: patientAppoinmentData[i].time,
        symptoms: patientAppoinmentData[i].symptoms,
        medicine: prescriptionData.medicine,
        note: prescriptionData.note,
        userType: "patient",
      },
        recordList.push(recordData);
    }
    res.json(recordList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = patientRecords;
