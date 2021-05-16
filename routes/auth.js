const express = require('express');
const authController = require('../controllers/auth');
const router  = express.Router();

router.post("/patientSignup", authController.register)

// router.get("/patientSignup", function(req, res){
//     res.render("patientSignup");
// });

// router.get("/patientLogin", function(req, res){
//     res.render("patientLogin");
// });

router.post("/patientLogin", authController.login);

module.exports = router;