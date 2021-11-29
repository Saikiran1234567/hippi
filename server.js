const express = require('express')
const app = express();
let router = express.Router();
const cors = require("cors");
app.use(cors());

app.use(express.json());
const SignUp = require("./routes/SignUp");

app.use("/api",SignUp);

app.listen(4001,(error)=>{
    if(error) console.log(error);
    else console.log("Application Running on port 4001");
});
