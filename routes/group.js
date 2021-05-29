var express = require("express");
var router = express.Router();
var groupsController = require("../controller/groups-controller");

router.get("/all", groupsController.allgroups);
router.post("/add", groupsController.addGroup);
router.post("/delete", groupsController.deleteSingleGroup);


module.exports = router;
