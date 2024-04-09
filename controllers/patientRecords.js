const userModel = require("../models/user.js");
const bookAppointmentModel = require("../models/bookAppointmentModel.js");
const prescriptionModel = require("../models/prescription.js");

const patientRecords = async(req,res) => {

try{
    const patientId = req.session.userId;
    let recordList = [];
    const user = await userModel.findOne({
        _id: loggedIn
    });
    if(user!=null){
        const patientAppoinmentData = await bookAppointmentModel.find({patientId:patientId,status:"Completed"});
    
        for (let i = 0; i < patientAppoinmentData.length; i++) {

            let userData = await userModel.findOne({_id:patientAppoinmentData[i].doctorId});
            let prescriptionData = await prescriptionModel.findOne({appointmentId:patientAppoinmentData[i]._id});
            console.log(prescriptionData);
            let count=i;
            let appoinmentDate = new Date(patientAppoinmentData[i].date);
            let formattedAppoinmentDate = appoinmentDate.toISOString().split('T')[0];

            recordData = 
              {
                no: ++count,
                appointmentWith: "Dr" + userData.firstName + " " + userData.lastName,
                date: formattedAppoinmentDate,
                time: patientAppoinmentData[i].time,
                symptoms: patientAppoinmentData[i].symptoms,
                medicine:prescriptionData.medicine,
                note:prescriptionData.note,
                userType: "patient"
              },
              recordList.push(recordData);
        }
        console.log(recordList);
        res.json(recordList);
    }else{
        res.json("notLoggedIn")
    }
    

}catch(error){
    console.log(error);
}

}

module.exports = patientRecords