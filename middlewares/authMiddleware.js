const {getUserIdFromSession} = require("../models/session.js");

const authMiddleware = async(req,res,next)=>{
  const userId = req.session.userId;
  console.log(req.session.userId);
  const sessionUserId = await getUserIdFromSession();
  if (sessionUserId) {
    next();
  }else{
    console.log("User", sessionUserId);
    return res.json("notLoggedIn");
  }
}

module.exports = authMiddleware