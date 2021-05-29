var express = require("express");
var router = express.Router();
var usersController = require("../controller/users-controller");

router.post("/login", usersController.login);
module.exports = router;
