const userModel = require("../models/user.js");
const bookAppointmentModel = require("../models/bookAppointmentModel.js");
const {sessionModel} = require("../models/session.js");
const paientDashboard = async (req, res) => {
  try {
    const userId = await sessionModel.find();
    if(userId){
      console.log(userId[0].userId);
      let appoinmentList = [];
      const patientAppoinmentData = await bookAppointmentModel.find({
        patientId: userId[0].userId,
        status:{ $in: ["Upcoming","Requested"] }
      });
      
  
      for (let i = 0; i < patientAppoinmentData.length; i++) {
        let userData = await userModel.findOne({
          _id: patientAppoinmentData[i].doctorId,
        });
        let count = i;
        let appoinmentDate = new Date(patientAppoinmentData[i].date);
        let formattedAppoinmentDate = appoinmentDate.toISOString().split("T")[0];
  
        appoinmentData = {
          no: ++count,
          appointmentId: patientAppoinmentData[i]._id,
          appointmentWith: userData.firstName + " " + userData.lastName,
          date: formattedAppoinmentDate,
          time: patientAppoinmentData[i].time,
          symptoms: patientAppoinmentData[i].symptoms,
          status: patientAppoinmentData[i].status,
          userType: "patient",
        },
          appoinmentList.push(appoinmentData);
      }
      res.json(appoinmentList);
    }else{
      console.log("user" + userId);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = paientDashboard;
