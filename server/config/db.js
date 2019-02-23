const mongoose = require("mongoose");
const chalk = require("chalk");

const uri = process.env.URI;

mongoose.connect(`${uri}`, { useNewUrlParser: true });

mongoose.connection.on("error", err => {
  console.log(chalk.red(`Connection error:  ${err}`));
});

mongoose.connection.once("open", () => {
  console.log(chalk.green("Connected to db"));
});
