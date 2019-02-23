/**
 * "C:\Program Files\MongoDB\Server\4.0\bin\mongo.exe"
 */
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const chalk = require("chalk");
const history = require("connect-history-api-fallback");
const session = require("express-session");
const passport = require("passport");
const MongoStore = require("connect-mongo")(session);
const router = require("./routes");
const { auth, isAdmin } = require("./middleware/authentication");
require("./config/passport");
require("./config/db");

const app = express();

app.use("/", router);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
if (process.env.NODE_ENV !== "test") {
  app.use(history());
  app.use(morgan("dev"));
}

app.use(
  session({
    secret: "silent-squirrel",
    cookie: {
      path: "/",
      httpOnly: true,
      maxAge: 144 * 60 * 10000 // 1 day
    },
    resave: false,
    store: new MongoStore({ url: process.env.URI }),
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
// localhost:port/api/route

app.use(express.static("dist/"));
app.use(express.static(`${__dirname}/dist"`));

app.listen(process.env.PORT, () => {
  console.log(chalk.blue(`App is running on port ${process.env.PORT}`));
});
module.exports = app;
