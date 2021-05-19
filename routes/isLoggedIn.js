

module.exports = (req, res, next) =>{
    console.log(req.session);
    if(!req.session.isLoggedIn){
        return res.redirect('/patientLogin');
    }
    else {
        next();
    }
}