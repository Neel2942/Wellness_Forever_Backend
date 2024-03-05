const userModel = require("../models/user.js");

const doctorsList = async (req, res) => {
  try {
    const user = await userModel.findOne({
      _id: loggedIn,
    });
    if (user != null) {
    let doctorsList = [];
    const doctorUser = await userModel.find({ userType: "doctor" });
    for (let i = 0; i < doctorUser.length; i++) {
      userData = 
        {
          fullName: doctorUser[i].firstName + " " + doctorUser[i].lastName,
          email: doctorUser[i].email,
          age: doctorUser[i].age,
          userType: doctorUser[i].userType,
          specialization: doctorUser[i].specialization,
          description: doctorUser[i].description,
        },
        doctorsList.push(userData);
    }
    res.json(doctorsList);
    } else {
      res.json("notLoggedIn");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("error");
  }
};

module.exports = doctorsList;
