'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  account.init({
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    broker: DataTypes.STRING,
    broker_group: DataTypes.STRING,
    server: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.INTEGER,
  }, {
    createdAt: false,
    updatedAt: false,
    sequelize,
    modelName: 'account',
  });
  return account;
};