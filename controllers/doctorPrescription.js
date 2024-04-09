const bookAppointmentModel = require("../models/bookAppointmentModel");
const prescriptionModel = require("../models/prescription");

const doctorPrescription = async(req,res) =>{
    try{
    const medicineList = req.body.medicine;
    const medicineListArray = medicineList.split(",");

    const prescriptionData = {
        appointmentId:req.body.appointmentId,
        medicine:medicineListArray,
        note:req.body.note
    }
    
        const prescriptionDB = await prescriptionModel.create(prescriptionData);
        if(prescriptionDB){
            const statusUpdate = await bookAppointmentModel.findByIdAndUpdate(req.body.appointmentId,{status:"Completed"});
            if(statusUpdate){
                res.json("prescriptionAdded");
            }
        }else{
            res.json("prescriptionNotAddes");
        }
    }catch(error){
        console.log(error);
    }

}

module.exports = doctorPrescription;