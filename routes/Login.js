const express = require('express');
const router = express.Router();
const passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
var Users = require('./SignUp')

router.post("/Login",passport.authenticate('local', { successRedirect: '/SignUp',failureRedirect: '/Login',failureFlash: true }), async(req,res)=>{
    const log = {
        user_name : req.body.user_name,
        pass : req.body.pass
    }
    res.send(log)
})

passport.use(new LocalStrategy({
    usernameField: 'user_name',
    passwordField: 'pass'
  },
  function(user_name, pass, done) {
     (Users.find((user)=>{user.email===user_name}), function(err, user,done) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(pass)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

module.exports = router