var express = require('express');
var router = express.Router();
var usersRoute = require('./users')
var brokersRoute = require('./broker')
var groupsRoute = require('./group')
var accountsRoute = require('./account')

router.use('/users', usersRoute );
router.use('/brokers', brokersRoute );
router.use('/groups', groupsRoute );
router.use('/accounts', accountsRoute );


module.exports = router;
