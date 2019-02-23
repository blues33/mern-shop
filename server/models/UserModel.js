const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: [true, "You must provide a first name."],
    minlength: [2, "name must be at least 2 characters longs"],
    maxlength: [16, "limit of name is 16 characters long"]
  },
  last_name: {
    type: String,
    minlength: [2, "name must be at least 2 characters longs"],
    maxlength: [16, "limit of name is 16 characters long"],
    required: [true, "You must provide a last name."]
  },
  phone_number: {
    type: String,
    minlength: [4, "phone number should be at least 4 numbers long"],
    required: [true, "You must provide a phone."]
  },
  email: {
    type: String,
    required: [true, "You must provide an email address."],
    unique: [true, "This email address is already taken."],
    validate: [validateEmail, "Please fill a valid email adress"]
  },
  password: {
    type: String,
    minlength: [8, "name must be at least 8 characters long"],
    maxlength: [16, "password must be from 8 to 16 characters long"],
    required: [true, "You must provide a password."]
  },
  role: {
    type: String
  },
  created_at: {
    type: String
  }
});

UserSchema.plugin(uniqueValidator);

// with arrow function u get here password as undefined
// TODO: should i change it on primise based?
UserSchema.pre("save", function(next) {
  const password = this.password;
  if (password) {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return next(err);
      }
      this.password = hash;
      next();
    });
  } else {
    next();
  }
});

function validateEmail(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
}

const User = mongoose.model("User", UserSchema);
module.exports = User;
