const {sessionModel,deleteSession} = require('../models/session.js');

const logoutController = async(req, res) => {
  const userId = await sessionModel.find();
  if(userId){
      // Destroy the session to logout the user
      deleteSession(userId[0]);
      req.session.destroy((err) => {
        if (err) {
          console.error("Logout error:", err);
          return res.status(500).json({ message: "Error logging out" });
        } else {
          return res.json({ message: "Logout Successfull" });
        }
      });
    }
  }
  
  module.exports = logoutController;
  