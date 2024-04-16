require("dotenv").config();
require("./db/dbinit.js");
const express = require("express");
const expressSession = require("express-session");
const cors = require("cors");
const app = express();

app.use(cors({
  origin: "https://wellnessforever-rouge.vercel.app",
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials:"true"
}))

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
const updateProfile = require("./controllers/updateProfile.js");
const cancelAppointmentList = require("./controllers/cancelAppointmentList.js");
const adminAppointmentList = require("./controllers/adminAppointmentList.js");
const logout = require("./controllers/logoutController.js");
const doctorPrescription = require("./controllers/doctorPrescription.js");
const patientRecords = require("./controllers/patientRecords.js");
const doctorRecords = require("./controllers/doctorRecords.js");

// Custom Middleware
const authMiddleware = require("./middlewares/authMiddleware.js");

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


// ----------------------Auth----------------------

// User Registration Route
app.post("/signup", userRegister);
// User Login Route
app.post("/login", userLogin);
//user logout
app.get("/logout", logout);

// ----------------------Patient----------------------

// Patient Dashboard Route
app.get('/patientDashboard', authMiddleware, paientDashboard);
// Patient Records Route
app.get("/patientRecords", authMiddleware, patientRecords);

// ----------------------Doctor----------------------

// Doctor Dashboard Route
app.get('/doctorDashboard', authMiddleware, doctorDashboard);
// Doctor Prescription Route
app.post('/doctorPrescription',authMiddleware, doctorPrescription);
// Doctor Records Route
app.get("/doctorRecords",authMiddleware, doctorRecords);
// Booking Appointment
app.post("/bookingAppointment", authMiddleware, bookAppointment);
// Doctor's List
app.get("/doctorsList", authMiddleware,doctorsList);
// Cancel Appointment
app.post("/cancelAppointment", authMiddleware, cancelBooking);
// Admin Cancel Request
app.post("/cancelRequest", authMiddleware, adminCancelRequest);
// User profile edit
app.post("/updateuser", authMiddleware, updateProfile);

// ----------------------Admin----------------------

// Admin Dashboard Route
app.get('/adminDashboard', authMiddleware, adminDashboard);
// Cancel Appointment List
app.get("/cancelAppoinmentList", authMiddleware, cancelAppointmentList);
// Admin Appointment List
app.get("/adminAppointmentList", authMiddleware, adminAppointmentList);

