"use strict";

const models = require("../models");
const userModel = models.user;
const jwt = require("jsonwebtoken");
const config = require("../config/token");

const login = async (req, res, next) => {
  let { username, password } = req.body;

  await userModel
    .findOne({
      where: {
        username,
      },
    })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      //   var passwordIsValid = bcrypt.compareSync(
      //     req.body.password,
      //     user.password
      //   );

      if (user.password !== password) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });
      res.setHeader("x-access-token", token);

      res.status(200).send({
        id: user.id,
        username: user.username,
        role: user.role,
        accessToken: token,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};


module.exports = { login };
