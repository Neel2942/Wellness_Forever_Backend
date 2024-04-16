const userModel = require("../models/user");
const {sessionModel} = require("../models/session.js");

const authMiddleware = async(req,res,next)=>{
  const sessionUserId = await sessionModel.find();
  if (sessionUserId) {
    next();
  }
  console.log("User", sessionUserId[0]);
  return res.json("notLoggedIn");
}

module.exports = authMiddleware