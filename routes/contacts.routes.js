const express = require('express');
const router = express.Router();
const { contactsControllers: ctrl } = require('../controllers');

router.get('/', ctrl.getAllContactsCTRL);
router.post('/', ctrl.addContactCTRL);

module.exports = router;
