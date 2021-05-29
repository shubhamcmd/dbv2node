'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('account_brokers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      login: {
        type: Sequelize.STRING
      },
      broker: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      balance: {
        type: Sequelize.DOUBLE
      },
      equity: {
        type: Sequelize.DOUBLE
      },
      floating_pl: {
        type: Sequelize.DOUBLE
      },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('account_brokers');
  }
};