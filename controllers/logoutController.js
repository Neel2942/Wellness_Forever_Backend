const sessionModel = require('./sessionModel');
const deleteSession = require('./sessionModel').deleteSession;

const logoutController = async(req, res) => {
  const sessionUserId = await sessionModel.find();
  if(sessionUserId){
    // Destroy the session to logout the user
    deleteSession(sessionUserId[0]);
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
  