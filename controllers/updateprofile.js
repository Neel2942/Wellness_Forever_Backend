const userModel = require("../models/user.js");

const updateprofile = async (req, res) => {
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
            res.json("Updated");
           
        } else {
            res.json("Not Updated");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = updateprofile;