const patientModel = require("../models/user.js");
const bcrypt = require("bcrypt");

const userLogin = async (req, res) => {
    const userdata = {
        email: req.body.email,
        password: req.body.password,
    };

    try {
        const check = await patientModel.findOne({ email: userdata.email });

        if (check) {
            const paswordCheck = await bcrypt.compare(userdata.password,check.password);
            if(paswordCheck){
                res.json("exist");
            } else {
                res.json("incorrectPassword");
            }
        }else{
            res.json("notExists");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json("error");
    }
}

module.exports = userLogin;