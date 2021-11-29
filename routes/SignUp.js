const express = require('express');
const router = express.Router();
const Joi = require("joi");

router.post("/SignUp", async(req,res)=>{
    try {
        const name = req.body.username
        const email = req.body.useremail
        const password = req.body.userpswd
        const checkbox = req.body.usercheck
    } catch (error) {
        console.log(error)
    }
})
module.exports = router