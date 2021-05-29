"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("accounts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      login: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      broker: {
        type: Sequelize.STRING,
      },
      broker_group: {
        type: Sequelize.STRING,
      },
      server: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.INTEGER,
      },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE,
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE,
      // },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("accounts");
  },
};
