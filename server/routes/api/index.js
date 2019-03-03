const express = require("express");
const router = express.Router();

const userApi = require("./user");
const authApi = require("./auth");

router.use("/user", userApi);
router.use("/auth", authApi);

module.exports = router;
