const userModel = require("../models/user.js");
const paientDashboard = async (req, res) => {
    const userdata = [
        {
            _id:123,
            no: 1,
            appointmentWith: "Dr. Zaid Alam",
            date:"10/05/2024",
            time: "3.25 pm",
            status: "Upcoming",
            option: "Cancel",
        },
  
        {
            _id:124,
            no: 1,
            appointmentWith: "Dr. Neel Patel",
            date:"14/05/2024",
            time: "6.00 pm",
            status: "Upcoming",
            option: "Cancel",
        },
  
        {
            _id:125,
            no: 1,
            appointmentWith: "Dr. Karan Dhiman",
            date:"14/05/2024",
            time: "6.00 pm",
            status: "Upcoming",
            option: "Cancel",
        },
  
        {
            _id:126,
            no: 1,
            appointmentWith: "Dr. Swapnil Nanavati",
            date:"14/05/2024",
            time: "6.00 pm",
            status: "Upcoming",
            option: "Cancel",
        },
  
        {
            _id:127,
            no: 1,
            appointmentWith: "Dr. Kaisar Jamal",
            date:"14/05/2024",
            time: "6.00 pm",
            status: "Upcoming",
            option: "Cancel",
        },
  
        {
            _id:128,
            no: 1,
            appointmentWith: "Dr. Aniketh Kazi",
            date:"14/05/2024",
            time: "6.00 pm",
            status: "Upcoming",
            option: "Cancel",
        },
  
    ];
  
    try {
        const user = await userModel.findOne({
            _id: loggedIn
        });
        if(user!=null){
        res.json(userdata);
        }else{
            res.json("notLoggedIn")
        }  
    } catch (error) {
        console.error(error);
        res.status(500).json("error");
    }
  }

  module.exports = paientDashboard;