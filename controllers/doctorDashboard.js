const userModel = require("../models/user.js");

const doctorDashboard = async (req, res) => {
  const userdata = [
    {
      _id: 123,
      no: 1,
      appointmentWith: "Zaid Alam",
      date: "10/05/2024",
      time: "3.25 pm",
      status: "Upcoming",
      option: "Cancel",
    },

    {
      _id: 124,
      no: 1,
      appointmentWith: "Neel Patel",
      date: "14/05/2024",
      time: "6.00 pm",
      status: "Upcoming",
      option: "Cancel",
    },

    {
      _id: 124,
      no: 1,
      appointmentWith: "Karan Dhiman",
      date: "14/05/2024",
      time: "6.00 pm",
      status: "Upcoming",
      option: "Cancel",
    },

    {
      _id: 124,
      no: 1,
      appointmentWith: "Swapnil Nanavati",
      date: "14/05/2024",
      time: "6.00 pm",
      status: "Upcoming",
      option: "Cancel",
    },

    {
      _id: 124,
      no: 1,
      appointmentWith: "Kaisar Jamal",
      date: "14/05/2024",
      time: "6.00 pm",
      status: "Upcoming",
      option: "Cancel",
    },

    {
      _id: 124,
      no: 1,
      appointmentWith: "Aniketh Kazi",
      date: "14/05/2024",
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
    res.json("login")
  }
  } catch (error) {
    console.error(error);
    res.status(500).json("error");
  }
};

module.exports = doctorDashboard;
