require('./db/dbinit.js');
const pateintModel = require("./models/patient.js");
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000

app.get("/api",(req,res)=>{
    res.json({"users" : ["UserOne","UserTwo"]});
});
app.listen(port, () => {
    console.log("App is running at port " + port);
});