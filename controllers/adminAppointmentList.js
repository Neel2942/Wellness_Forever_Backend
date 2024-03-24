const bookAppointmentModel = require("../models/bookAppointmentModel.js");
const userModel = require("../models/user.js");

const adminAppointmentList = async(req,res) => {

    const appointmentList = await bookAppointmentModel.find();
    const noOfAppointments = await bookAppointmentModel.find({doctorId:appointmentList.doctorId});
    let userAppointmentList = [];

    for(i=0;i<appointmentList.length;i++){
        let patientData = await userModel.findById(appointmentList[i].patientId);
       let doctorData = await userModel.findById(appointmentList[i].doctorId);
       appointmentListData = {
         doctorName: "Dr" + " " +doctorData.firstName + " " + doctorData.lastName,
         noOfAppointments: noOfAppointments.length,
         time: appointmentList[i].time,
         date: appointmentList[i].date,
         listOfPatients:[{
            patientName: patientData.firstName + " " + patientData.lastName,
            date:appointmentList[i].date,
            time:appointmentList[i].time,
            symptoms:appointmentList[i].symptoms
         }
         ]
       },
       userAppointmentList.push(appointmentListData);
    }
    res.send(userAppointmentList);
}

module.exports = adminAppointmentList;