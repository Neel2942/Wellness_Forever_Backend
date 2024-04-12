const userModel = require("../models/user.js");

const updateProfile = async (req, res) => {
    try {
        const userdata = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            age: req.body.age,
           
        };
        const check = await userModel.findByIdAndUpdate(loggedIn,userdata);

        if (check) {
            const updatedUser = await userModel.findById(loggedIn);

            const userData = [
                {
                  _id: updatedUser._id,
                  firstName: updatedUser.firstName,
                  lastName: updatedUser.lastName,
                  email: updatedUser.email,
                  phoneNumber: updatedUser.phoneNumber,
                  age: updatedUser.age,
                  userType: updatedUser.userType,
                  specialization: updatedUser.specialization,
                },
              ];

            res.json({updatedUser:userData,message:"Updated"});
           
        } else {
            res.json("Not Updated");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = updateProfile;
