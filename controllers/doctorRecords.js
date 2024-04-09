const userModel = require("../models/user.js");
const bookAppointmentModel = require("../models/bookAppointmentModel.js");
const prescriptionModel = require("../models/prescription.js");

const doctorRecords = async(req,res)=>{
    try {
        const doctorId = req.session.userId;
        let recordList = [];
        const user = await userModel.findOne({
          _id: loggedIn,
        });
        if (user != null) {
          const doctorAppoinmentData = await bookAppointmentModel.find({doctorId: doctorId,status:"Completed"});
    
          for (let i = 0; i < doctorAppoinmentData.length; i++) {
    
            let userData = await userModel.findOne({ _id: doctorAppoinmentData[i].patientId });
            console.log(doctorAppoinmentData[i]._id);
            let prescriptionData = await prescriptionModel.findOne({appointmentId:doctorAppoinmentData[i]._id});
            console.log(doctorId)
            let count = i;
            let appoinmentDate = new Date(doctorAppoinmentData[i].date);
            let formattedAppoinmentDate = appoinmentDate.toISOString().split("T")[0];
    
            recordData = {
              no: ++count,
              appointmentId:doctorAppoinmentData[i]._id,
              appointmentWith: userData.firstName + " " + userData.lastName,
              date: formattedAppoinmentDate,
              time: doctorAppoinmentData[i].time,
              symptoms: doctorAppoinmentData[i].symptoms,
              medicine:prescriptionData.medicine,
              note:prescriptionData.note,
              userType: "doctor"
            },
            recordList.push(recordData);
          }
          res.json(recordList);
        } else {
          res.json("notLoggedIn");
        }
      } catch (error) {
        console.error(error);
        res.status(500).json("error");
      }
}

module.exports = doctorRecords