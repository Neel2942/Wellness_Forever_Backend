const userModel = require("../models/user");

const authMiddleware = async(req,res,next)=>{
    const user = await userModel.findOne({
        _id: loggedIn,
      });
      if (user == null) {
        res.json("notLoggedIn");
      }else{
        next();
      }
}

module.exports = authMiddleware