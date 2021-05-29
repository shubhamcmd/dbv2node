const models = require("../models");
const userModel = models.user;
const allUsers = async () => {
  try {
    let users = await userModel.findAll({
      attributes: { exclude: ["password"] },
      raw: true,
    });
    return users;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  allUsers,
};
