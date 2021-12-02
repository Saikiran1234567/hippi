const LocalStrategy = require('passport-local').Strategy

function initialize(passport, getUserByEmail) {
  const authenticateUser = async (email, password, done) => {
    const user = getUserByEmail(email)
    if (user == null) {
      return done(null, false, { message: 'No user with that email' })
    }

    try {
        if (password === user.password){
            return done(null, user)
        }
        else {
            return done(null, false, { message: 'Password incorrect' })
        }
    } catch (e) {
      return done(e)
    }
  }

  passport.use(new LocalStrategy({ useremailField: 'useremail',userpasswordField: 'userpswd' }, authenticateUser))
  passport.serializeUser((user, done) => done(null))
  passport.deserializeUser((done) => {
    return done(null)
  })
}

module.exports = initialize;