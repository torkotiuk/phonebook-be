const express = require('express');
const router = express.Router();
const { productsControllers: ctrl } = require('../controllers');

router.get('/', ctrl.getAllProductsCTRL);

module.exports = router;
