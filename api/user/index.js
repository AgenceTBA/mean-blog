'use strict';

var express = require('express');
var controller = require('./user.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.delete('/:id', controller.destroy);
router.get('/logout', controller.logout);

module.exports = router;