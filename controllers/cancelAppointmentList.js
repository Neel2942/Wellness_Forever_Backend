const bookAppointmentModel = require("../models/bookAppointmentModel.js");

const cancelAppointmentList = async(req,res)=>{
    const appoinmentList = await bookAppointmentModel.find();

    if(appoinmentList){
        console.log(appoinmentList);
        res.send(appoinmentList);
    }
}

module.exports = cancelAppointmentList;