"use strict";

const models = require("../models");
const groupModel = models.group;
const accountModel = models.account;

const allgroups = async (req, res, next) => {
  try {
    let groups = await groupModel.findAll({
      raw: true,
    });
    if (groups) {
      return res.status(200).json({ rows: groups });
    }
    return res.status(200).json({ rows: [] });
  } catch (err) {
    return res.status(err.status || 500).json(err);
  }
};

const addGroup = async (req, res, next) => {
  try {
    await groupModel.create(req.body);
    return res.status(200).json({ rows: "Save" });
  } catch (err) {
    console.log(err);
    return res.status(err.status || 500).json(err);
  }
};
const deleteSingleGroup = async (req, res, next) => {
  try {
    let { id } = req.body;
    let singleGroup = await groupModel.findOne({
      where: {
        id,
      },
      raw: true,
    });

    if (singleGroup) {
      console.log(singleGroup.name, "singleGroup");
      let accountsWithGroup = await accountModel.findAll({
        where: {
          broker_group: singleGroup.name,
        },
        raw: true,
      });
      if (accountsWithGroup) {
        await accountModel.destroy({
          where: { broker_group: singleGroup.name },
        });
      }
      await groupModel.destroy({ where: { id } });
      return res.status(200).json({ rows: "deleted" });
    }
    return res.status(200).json({ rows: [] });
  } catch (err) {
    console.log(err);
    return res.status(err.status || 500).json(err);
  }
};

module.exports = { allgroups, addGroup, deleteSingleGroup };
