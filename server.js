require("dotenv").config();
require("./db/dbinit.js");
const express = require("express");
const expressSession = require("express-session");
// const cors = require("cors");
const app = express();

// app.use(cors({
//   origin: "https://wellness-forever-frontend.vercel.app",
//   credentials:"true"
// }))

// Controllers
const userRegister = require("./controllers/userRegsiter.js");
const userLogin = require("./controllers/userLogin.js");
const paientDashboard = require("./controllers/patientDashboard.js");
const doctorDashboard = require("./controllers/doctorDashboard.js");
const adminDashboard = require("./controllers/adminDashboard.js");
const bookAppointment=require("./controllers/bookingAppointment.js");
const doctorsList = require("./controllers/doctorsList.js");
const cancelBooking = require("./controllers/cancelBooking.js");
const adminCancelRequest = require("./controllers/adminCancelRequest.js");
const updateprofile = require("./controllers/updateprofile.js");
const cancelAppointmentList = require("./controllers/cancelAppointmentList.js");
const adminAppointmentList = require("./controllers/adminAppointmentList.js");
const logout = require("./controllers/logoutController.js");
const doctorPrescription = require("./controllers/doctorPrescription.js");
const patientRecords = require("./controllers/patientRecords.js");

// Custom Middleware

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressSession({
  secret:"secret"
}));
global.loggedIn = null;

app.use("*",(req,res,next)=>{
  loggedIn = req.session.userId;
  next();
});

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
// Patient Records Route
app.get("/patientRecords",patientRecords);
// Doctor Dashboard Route
app.get('/doctorDashboard', doctorDashboard);
// Doctor Prescription Route
app.post('/doctorPrescription',doctorPrescription);
// Admin Dashboard Route
app.get('/adminDashboard', adminDashboard);
// Booking Appointment
app.post("/bookingAppointment", bookAppointment);
// Doctor's List
app.get("/doctorsList", doctorsList);
// Cancel Appointment
app.post("/cancelAppointment",cancelBooking);
// Admin Cancel Request
app.post("/cancelRequest",adminCancelRequest);
// User profile edit
app.post("/updateuser", updateprofile);
// Cancel Appointment List
app.get("/cancelAppoinmentList",cancelAppointmentList);
// Admin Appointment List
app.get("/adminAppointmentList",adminAppointmentList);
//user logout
app.get("/logout",logout);
