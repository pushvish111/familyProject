const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.patients = function(req, res){
    const fName = req.body.fName;
    const lName = req.body.lName;
    const age = req.body.age;
    const address = req.body.address;
    const email = req.body.email;
    const symptoms = req.body.symptoms;
    const date = req.body.date;
    const time = req.body.time;

    db.query('INSERT INTO patients_data SET ?', { first_name : fName, last_name : lName, age : age, address : address, email : email, symptoms : symptoms ,date : date, time : time }, function(error, results){
        if(error){
            console.log(error);
        } else{
            console.log(results);
            return res.send("yaaye!! data jaa rha database mein!!!");
        }
    });
}