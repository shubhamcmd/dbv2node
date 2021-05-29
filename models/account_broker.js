'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class account_broker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  account_broker.init({
    login: DataTypes.STRING,
    broker: DataTypes.STRING,
    description: DataTypes.STRING,
    balance: DataTypes.DOUBLE,
    equity: DataTypes.DOUBLE,
    floating_pl: DataTypes.DOUBLE
  }, {
    createdAt: false,
    updatedAt: false,
    sequelize,
    modelName: 'account_broker',
  });
  return account_broker;
};