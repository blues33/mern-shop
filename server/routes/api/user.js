// user routes
const express = require("express");
const User = require("../../models/UserModel");
const chalk = require("chalk");
const router = express.Router();
const { auth, isAdmin } = require("../../middleware/authentication");

router.get("/", (request, response) => {
  response.send("Users");
});

router.post("/", (request, response) => {
  const date = Date();
  const { first_name, last_name, phone_number, email, password } = request.body;
  const user = new User({
    first_name,
    last_name,
    phone_number,
    email,
    password,
    role: "user",
    created_at: date.toString()
  });

  user
    .save()
    .then(() => {
      return response.sendStatus(201);
    })
    .catch(err => {
      console.log(err);
      return response.status(400).send({ error: err });
    });
});

/*
router.get("/", auth, isAdmin, (request, response) => {
  User.find((err, user) => {
    if (err) {
      console.log(chalk.red(err));
      return response.sendStatus(400, { error: err });
    }
    return response.send(user);
  }).select("-__v -password");
});


router.put("/:id", auth, isAdmin, (request, response) => {
  const { first_name, last_name, phone_number, email, password } = request.body;
  const user = {
    first_name,
    last_name,
    phone_number,
    email,
    password,
    role: "user"
  };

  User.findByIdAndUpdate(request.params.id, user, err => {
    if (err) {
      console.log(err);
      return response.sendStatus(500, { error: err });
    }
    return response.sendStatus(201);
  });
});

router.delete("/:id", auth, isAdmin, (request, response) => {
  User.deleteOne({ _id: request.params.id }, err => {
    //  не обходимо ли изменить на удаление через форму, а не по url`у?
    if (err) {
      return response.status(400).send({ error: err });
    }
    return response.sendStatus(200);
  });
});

*/
module.exports = router;
