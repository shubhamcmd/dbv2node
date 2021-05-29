var express = require("express");
var router = express.Router();
var accountsController = require("../controller/account-controller");

router.get("/all-accounts", accountsController.FetchAllAccount);
router.get("/account/:id", accountsController.FetchSingleAccount);
router.post("/add-account", accountsController.addAccount);
router.post("/update/:id", accountsController.updateSingleAccount);
router.post("/delete", accountsController.deleteSingleAccount);


module.exports = router;
