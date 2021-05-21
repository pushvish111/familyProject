const express = require('express');
const session = require("express-session");
const router  = express.Router();
const isLoggedIn = require('./isLoggedIn');
const patientData = require('../controllers/patientData')




router.get("/", function(req, res){
    res.render("landing");
});

router.get("/patientSignup", function(req, res){
    res.render("patientSignup");
});

router.get("/patientLogin", function(req, res){
    res.render("patientLogin");
});

router.post("/auth/logout", function(req, res){
    req.session.destroy(err => {
        if(err){
            console.log(err);
        }
        res.redirect("/");
    })
});




router.get("/book_an_appointment",isLoggedIn, function(req, res){
    res.render("appointment");
});

router.post("/book_an_appointment", patientData.patients);







module.exports = router;