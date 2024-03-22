const bookAppointmentModel = require("../models/bookAppointmentModel.js");
const userModel = require("../models/user.js");

const adminAppointmentList = async(req,res) => {

    const appointmentList = await bookAppointmentModel.find();

    let userAppointmentList = [];

    for(i=0;i<appointmentList.length;i++){
        let patientData = await userModel.findById(appointmentList[i].patientId);
       let doctorData = await userModel.findById(appointmentList[i].doctorId);
       appointmentListData = {
         patientName: patientData.firstName + " " + patientData.lastName,
         doctorName: "Dr" + " " +doctorData.firstName + " " + doctorData.lastName,
         time: appointmentList[i].time,
         date: appointmentList[i].date,
       },
       userAppointmentList.push(appointmentListData);
    }

    res.send(userAppointmentList);
}

module.exports = adminAppointmentList;