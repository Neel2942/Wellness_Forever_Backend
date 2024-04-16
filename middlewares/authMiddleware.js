const userModel = require("../models/user");
const {getUserIdFromSession} = require("../models/session.js");

const authMiddleware = async(req,res,next)=>{
  const sessionUserId = await getUserIdFromSession(loggedIn);
  if (sessionUserId) {
    next();
  }else{
    console.log("User", sessionUserId[0]);
    return res.json("notLoggedIn");
  }
}

module.exports = authMiddleware