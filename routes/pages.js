const express = require('express');

const router  = express.Router();

router.get("/", function(req, res){
    res.render("landing");
});

router.get("/patientSignup", function(req, res){
    res.render("patientSignup");
});

router.get("/patientLogin", function(req, res){
    res.render("patientLogin");
});

module.exports = router;