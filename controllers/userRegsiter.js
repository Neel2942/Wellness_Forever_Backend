const userModel = require("../models/user.js");

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
        decription: req.body.description,
    };

    try {
        const check = await userModel.findOne({ email: userdata.email });

        if (check) {
            res.json("exist");
        } else {
            await userModel.create(userdata);
            res.json("notexists");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json("error");
    }
}

module.exports = userRegister;