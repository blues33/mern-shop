const express = require("express");
const passport = require("passport");
const chalk = require("chalk");
const router = express.Router();

const { auth } = require("../../middleware/authentication");

router.post("/login", (request, response, next) => {
  passport.authenticate("local", function(err, user, info) {
    // если есть ошибка в работе
    if (err) {
      return next(err);
    }
    // если введены не верные данные или нет пользователя passport вернул false
    if (!user) {
      return next(
        response.sendStatus(400, {
          message: "Incorrect username and password combination."
        })
      );
    }
    request.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return response.sendStatus(200);
    });
  })(request, response, next);
});

router.get("/logout", auth, (request, response) => {
  request.logout();
  return response.sendStatus(200);
});

router.get("/auth", (request, response) => {
  const role = request.user ? request.user.role : "empty";
  response.send(role);
});

module.exports = router;
