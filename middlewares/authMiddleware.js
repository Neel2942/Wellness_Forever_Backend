const {getUserIdFromSession} = require("../models/session.js");

const authMiddleware = async(req,res,next)=>{
  const sessionId = req.session.sessionId;
  console.log(sessionId);
  const sessionUserId = await getUserIdFromSession();
  if (sessionUserId) {
    next();
  }else{
    console.log("User", sessionUserId);
    return res.json("notLoggedIn");
  }
}

module.exports = authMiddleware