const express = require("express");
const studentDetailsModel = require("../models/studentDetailsModel");
const router = express.Router();

router.post("/add", async function (req, res) {
    console.log("req.body", req.body);
    try {
    const databaseCreationResponse = await studentDetailsModel.create(req.body);
    //console.log("databaseCreationResponse", databaseCreationResponse);
    res.send({ result: "Success" });
    } catch(error) {
        console.log("error occured", error);
    }
});

router.get("/getStudentDetails", async function (req, res) {
    try{
        const detailsOfStudent = await studentDetailsModel.find({}, {__v:0, _id:0});
        //console.log("data from database", detailsOfStudent);
        res.send({ result: detailsOfStudent });
    } catch {
        console.log("error occurred", error);
    }
    
});

module.exports = router;