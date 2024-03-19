const userModel = require("../models/user.js");
const bookAppointmentModel = require("../models/bookAppointmentModel.js");
const paientDashboard = async (req, res) => {  
    try {
        const patientId = req.session.userId;
        let appoinmentList = [];
        const user = await userModel.findOne({
            _id: loggedIn
        });
        if(user!=null){
            const patientAppoinmentData = await bookAppointmentModel.find({patientId:patientId});
        
            for (let i = 0; i < patientAppoinmentData.length; i++) {

                let userData = await userModel.findOne({_id:patientAppoinmentData[i].doctorId});
                let count=i;
                let appoinmentDate = new Date(patientAppoinmentData[i].date);
                let formattedAppoinmentDate = appoinmentDate.toISOString().split('T')[0];

                appoinmentData = 
                  {
                    no: ++count,
                    appointmentId:patientAppoinmentData[i]._id,
                    appointmentWith: userData.firstName + " " + userData.lastName,
                    date: formattedAppoinmentDate,
                    time: patientAppoinmentData[i].time,
                    symptoms: patientAppoinmentData[i].symptoms,
                    status: patientAppoinmentData[i].status,
                    userType: "patient"
                  },
                  appoinmentList.push(appoinmentData);
            }
            console.log(appoinmentList);
            res.json(appoinmentList);
        }else{
            res.json("notLoggedIn")
        }  
    } catch (error) {
        console.error(error);
        res.status(500).json("error");
    }
  }

  module.exports = paientDashboard;