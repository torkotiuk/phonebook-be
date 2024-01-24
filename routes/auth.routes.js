const express = require('express');
const router = express.Router();
const { authControllers: ctrl } = require('../controllers');

router.post('/register', ctrl.registerCTRL);
router.post('/login', ctrl.loginCTRL);

module.exports = router;
