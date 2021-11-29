const express = require('express');
const app = express();

app.get('/signup',(req,res) =>{
    res.send("hello Hippi wecome to voltuswave");
});

app.listen(4000);