const userModel = require("../models/user.js");

const doctorDashboard = async (req, res) => {

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
};

module.exports = doctorDashboard;
