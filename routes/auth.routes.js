const express = require('express');
const router = express.Router();
const { authControllers: ctrl } = require('../controllers');
const { authMDW } = require('../middlewares');

router.post('/register', ctrl.registerCTRL);
router.post('/login', ctrl.loginCTRL);
router.get('/logout', authMDW, ctrl.logoutCTRL);

module.exports = router;
