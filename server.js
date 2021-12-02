const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors");
var router = express.Router();
const passport = require("passport");
const session = require("express-session");
const SignUp = require("./routes/SignUp");
const Login = require("./routes/Login");
const flash = require('connect-flash');
const app = express();

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
  }));
app.use(cors());
app.use(flash());
app.use(passport.initialize());
app.use(express.json());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api",SignUp);
app.use("/api",Login);

app.listen(4001,(error)=>{
    if(error) console.log(error);
    else console.log("Application Running on port 4001");
});
