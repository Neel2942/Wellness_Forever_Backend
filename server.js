    require('dotenv').config();
    const db =  require('./db/dbinit.js');
    const patientModel = require("./models/patient.js");
    const express = require('express');
    const app = express();
    const port = process.env.PORT || 4000


    app.use(express.json());
    app.listen(port, () => {
        console.log("App is running at port " + port);
    });
    app.post('/signup', async (req, res) => {
        const userdata = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber,
            age: req.body.age,
            userType: req.body.userType,
            reportId: req.body.reportId,
            prescriptionId: req.body.prescriptionId,
        };
    
        try {
            const check = await db.findOne({ email: userdata.email });
    
            if (check) {
                res.json("exist");
            } else {
                await db.insertMany([userdata]);
                res.json("notexists");
            }
        } catch (error) {
            console.error(error);
            res.status(500).json("error");
        }
    });