const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const User = require('../users/usersModel');


passport.use(
  new GitHubStrategy({
    clientID: "6bc10986fdcb003b9e85",
    clientSecret: "2ad54a7701fd5a47333c14253f5c9814fd666218",
    callbackURL: "https://queup3000.herokuapp.com/api/auth/callback"
  },
  function(accessToken, refreshToken, profile, done) {

    User.findOne({where: {github: profile.id}})
      .then(found => {
        if(found){
          return done(null, found);
        } else {
          User.create({
            name: profile.displayName,
            github: profile.id
          })
        }
      })
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(err => done(err));
});
