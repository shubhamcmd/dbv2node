"use strict";

const models = require("../models");
const brokerModel = models.broker;
const accountModel = models.account;

const allbrokers = async (req, res, next) => {
  try {
    let brokers = await brokerModel.findAll({
      raw: true,
    });
    if (brokers) {
      return res.status(200).json({ rows: brokers });
    }
    return res.status(200).json({ rows: [] });
  } catch (err) {
    return res.status(err.status || 500).json(err);
  }
};

const addBroker = async (req, res, next) => {
  try {
    await brokerModel.create(req.body);
    return res.status(200).json({ rows: "Save" });
  } catch (err) {
    console.log(err);
    return res.status(err.status || 500).json(err);
  }
};
const deleteSingleBroker = async (req, res, next) => {
  try {
    let { id } = req.body;
    let singleBroker = await brokerModel.findOne({
      where: {
        id,
      },
      raw: true,
    });
    if (singleBroker) {
      let accountsWithBroker = await accountModel.findAll({
        where: {
          broker: singleBroker.name,
        },
        raw: true,
      });
      if (accountsWithBroker) {
        await accountModel.destroy({
          where: { broker: singleBroker.name },
        });
      }
      await brokerModel.destroy({ where: { id } });
      return res.status(200).json({ rows: "deleted" });
    }
    return res.status(200).json({ rows: [] });
  } catch (err) {
    console.log(err);
    return res.status(err.status || 500).json(err);
  }
};

module.exports = { allbrokers, addBroker, deleteSingleBroker };
