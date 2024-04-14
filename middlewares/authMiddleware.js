const userModel = require("../models/user");

const authMiddleware = async(req,res,next)=>{
  console.log(req.session.userId);
  if (!req.session.userId) {
    console.log("User", req.session.userId);
    return res.json("notLoggedIn");
  }
  next();
}

module.exports = authMiddleware