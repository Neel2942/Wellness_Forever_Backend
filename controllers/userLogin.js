const userModel = require("../models/user.js");
const bcrypt = require("bcrypt");

const userLogin = async (req, res) => {
  try {
    const userdata = {
      email: req.body.email,
      password: req.body.password,
    };
    const check = await userModel.findOne({ email: userdata.email });

    if (check) {
      const paswordCheck = await bcrypt.compare(
        userdata.password,
        check.password
      );
      if (paswordCheck) {
        req.session.userId = check._id;
        const user = await userModel.findOne({ _id: req.session.userId });
        const userData = [
          {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            age: user.age,
            userType: user.userType,
            specialization: user.specialization,
          },
        ];
        res.json(userData);
      } else {
        res.json("incorrectPassword");
      }
    } else {
      res.json("notExists");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = userLogin;
