const express = require('express');
const router = express.Router();
const Joi = require("joi");

router.post("/SignUp", async(req,res)=>{
    try {
        const {error} = validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        let user ={
            name : req.body.username,
            email : req.body.useremail,
            password : req.body.userpswd,
            checkbox : req.body.usercheck
        }
        res.send(user)
    } catch (error) {
        return res.send(error);
    }
})
module.exports = router;

const validate = (requestObj)=>{
    const schema = Joi.object({
        username : Joi.string().min(5).required(),
        useremail : Joi.string().required().email(),
        userpswd : Joi.string().min(8).required(),
        usercheck : Joi.boolean().required() 

    });
    return schema.validate(requestObj)
}