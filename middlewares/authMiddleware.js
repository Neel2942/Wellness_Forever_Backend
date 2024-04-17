const {sessionModel} = require("../models/session.js");

const authMiddleware = async(req,res,next)=>{
  const userId = await sessionModel.find();
  if(userId){
    next();
  }else{
      console.log("User", userId);
      return res.json("notLoggedIn");
    }
  }

module.exports = authMiddleware