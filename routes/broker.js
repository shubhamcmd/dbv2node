var express = require("express");
var router = express.Router();
var brokersController = require("../controller/brokers-controller");

router.get("/all", brokersController.allbrokers);
router.post("/add", brokersController.addBroker);
router.post("/delete", brokersController.deleteSingleBroker);


module.exports = router;
