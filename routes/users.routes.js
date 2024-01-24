const express = require('express');
const router = express.Router();
const { usersControllers: ctrl } = require('../controllers');
const { authMDW } = require('../middlewares');

router.get('/', ctrl.getAllUsersCTRL);
// router.get('/profile', ctrl.getUserProfileCTRL);
router.get('/profile', authMDW, ctrl.getUserProfileCTRL);

module.exports = router;
