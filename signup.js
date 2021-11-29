const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());

app.get('/',(req,res) =>{
    res.send("hello Hippi wecome to voltuswave");
});
app.post('/signup',(req,res)=>{
    const name = req.body.username
    const email = req.body.useremail
    const password = req.body.userpswd
    const checkbox = req.body.usercheck

    console.log(name,email,password,checkbox);
});

app.listen(4001,(error)=>{
    if(error) console.log(error);
    else console.log("Application Running on port 4001");
});