const userModel = require("../models/user.js");

const doctorsList = async (req, res) => {
  try {
    let doctorsList = [];
    const doctorUser = await userModel.find({ userType: "doctor" });
    for (let i = 0; i < doctorUser.length; i++) {
      userData = {
        id: doctorUser[i]._id,
        fullName: doctorUser[i].firstName + " " + doctorUser[i].lastName,
        email: doctorUser[i].email,
        age: doctorUser[i].age,
        userType: doctorUser[i].userType,
        specialization: doctorUser[i].specialization,
        description: doctorUser[i].description,
      }
        doctorsList.push(userData);
    }
    res.json(doctorsList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = doctorsList;
