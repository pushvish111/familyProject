const express = require('express');
const session = require("express-session");
const router  = express.Router();
const isLoggedIn = require('./isLoggedIn');




router.get("/", function(req, res){
    res.render("landing");
});

router.get("/patientSignup", function(req, res){
    res.render("patientSignup");
});

router.get("/patientLogin", function(req, res){
    res.render("patientLogin");
});


router.get("/book_an_appointment",isLoggedIn, function(req, res){

    res.send("aahhhan, trying to book an appointment !  ruko zara sabr kro!");
});


router.post("/auth/logout", function(req, res){
    req.session.destroy(err => {
        if(err){
            console.log(err);
        }
        res.redirect("/");
    })
})



module.exports = router;