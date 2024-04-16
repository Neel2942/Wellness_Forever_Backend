const {getUserIdFromSession} = require("../models/session.js");

const authMiddleware = async(req,res,next)=>{
  console.log(req.session.userId);
  const sessionUserId = await getUserIdFromSession(loggedIn);
  if (sessionUserId) {
    next();
  }else{
    console.log("User", sessionUserId);
    return res.json("notLoggedIn");
  }
}

module.exports = authMiddleware