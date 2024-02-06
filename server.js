require("dotenv").config();
require("./db/dbinit.js");
const express = require("express");
const expressSession = require("express-session");
const app = express();

// Controllers
const userRegister = require("./controllers/userRegsiter.js");
const userLogin = require("./controllers/userLogin.js");
const getPatientDashboard = require("./controllers/patientDashboard.js");
const paientDashboard = require("./controllers/patientDashboard.js");
const doctorDashboard = require("./controllers/doctorDashboard.js");

// Custom Middleware

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressSession({
  secret:"secret"
}));
global.loggeIn = null;

// Listening Port
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("App is running at port " + port);
});


// User Registration Route
app.post("/signup", userRegister);
// User Login Route
app.post("/login", userLogin);
// Patient Dashboard Route
app.get('/patientDashboard', paientDashboard);
// Doctor Dashboard Route
app.get('/doctorDashboard', doctorDashboard);