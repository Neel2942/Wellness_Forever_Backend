const userModel = require("../models/user.js");
const userLogout = async (req, res) => {
    try {
        // Clear the userId from the session
        req.session.userId = null;
        res.json("logoutSuccess");
    } catch (error) {
        console.error(error);
        res.status(500).json("error");
    }
}
module.exports = userLogout;