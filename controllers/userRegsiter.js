const patientModel = require("../models/user.js");

const userRegister = async (req, res) => {
    const userdata = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        age: req.body.age,
        userType: req.body.userType,
        specialization: req.body.specialization,
    };

    try {
        const check = await patientModel.findOne({ email: userdata.email });

        if (check) {
            res.json("exist");
        } else {
            await patientModel.create(userdata);
            res.json("notexists");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json("error");
    }
}

module.exports = userRegister;