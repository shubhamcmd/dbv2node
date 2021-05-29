"use strict";

const models = require("../models");
const accountModel = models.account;

const addAccount = async (req, res, next) => {
  try {
    await accountModel.create(req.body);
    return res.status(200).json({ rows: "Save" });
  } catch (err) {
    console.log(err);
    return res.status(err.status || 500).json(err);
  }
};

const FetchAllAccount = async (req, res, next) => {
  try {
    let allAccounts = await accountModel.findAll();
    if (allAccounts) {
      return res.status(200).json({ rows: allAccounts });
    }
    return res.status(200).json({ rows: [] });
  } catch (err) {
    console.log(err);
    return res.status(err.status || 500).json(err);
  }
};

const FetchSingleAccount = async (req, res, next) => {
  try {
    let { id } = req.params;
    let singleAccount = await accountModel.findOne({
      where: {
        id,
      },
      raw: true,
    });
    if (singleAccount) {
      return res.status(200).json({ rows: singleAccount });
    }
    return res.status(200).json({ rows: [] });
  } catch (err) {
    console.log(err);
    return res.status(err.status || 500).json(err);
  }
};

const updateSingleAccount = async (req, res, next) => {
  try {
    let { id } = req.params;
    let {
      login,
      password,
      broker,
      broker_group,
      server,
      description,
      status,
    } = req.body;
    let singleAccount = await accountModel.findOne({
      where: {
        id,
      },
      raw: true,
    });
    if (singleAccount) {
      await accountModel.update(
        {
          login: login,
          password: password,
          broker: broker,
          broker_group: broker_group,
          server: server,
          description: description,
          status: status === "active" ? 1 : 0,
        },
        { where: { id } }
      );
      return res.status(200).json({ rows: "updated" });
    }
    return res.status(200).json({ rows: [] });
  } catch (err) {
    console.log(err);
    return res.status(err.status || 500).json(err);
  }
};
const deleteSingleAccount = async (req, res, next) => {
  try {
    let { id } = req.body;
    console.log(id, 'id');
    let singleAccount = await accountModel.findOne({
      where: {
        id,
      },
      raw: true,
    });
    if (singleAccount) {
      await accountModel.destroy({ where: { id } });
      return res.status(200).json({ rows: "deleted" });
    }
    return res.status(200).json({ rows: [] });
  } catch (err) {
    console.log(err);
    return res.status(err.status || 500).json(err);
  }
};
module.exports = {
  addAccount,
  FetchAllAccount,
  FetchSingleAccount,
  updateSingleAccount,
  deleteSingleAccount,
};
