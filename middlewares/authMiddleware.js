const {sessionModel,getUserIdFromSession} = require("../models/session.js");

const authMiddleware = async(req,res,next)=>{
  const userId = await sessionModel.find();
  if(userId){
    const sessionUserId = await getUserIdFromSession(userId[0]);
    if (sessionUserId) {
      next();
    }else{
      console.log("User", sessionUserId);
      return res.json("notLoggedIn");
    }
  }
}

module.exports = authMiddleware