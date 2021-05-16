var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config({path: './.env'});
app.use(cookieParser());


//db connect

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

db.connect(function(error) {
    if(error){
        console.log("db not connectd!");
    };
    console.log('MYSQL database Conncted...');
});



app.use("/", require("./routes/pages"));
app.use("/auth", require("./routes/auth"));




app.listen(3000, function () {
    console.log("HomeoClinic has started");
  });