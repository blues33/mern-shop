const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const User = require("../models/UserModel");

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(
  new LocalStrategy(function(username, password, done) {
    User.findOne({ email: username }, function(err, user) {
      if (err) {
        console.log("some error");
        return done(err);
      }
      if (!user) {
        return done(null, false, {
          message: "Incorrect username and password combination."
        });
      }

      bcrypt.compare(password, user.password, (err, result) => {
        if (result === true) {
          console.log("ok");
          return done(null, user);
        }
        if (result === false) {
          return done(null, false, {
            message: "Incorrect username and password combination.."
          });
        }
      });
    });
  })
);
