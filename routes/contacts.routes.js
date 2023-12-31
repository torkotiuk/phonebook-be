const express = require('express');
const router = express.Router();
const { contactsControllers: ctrl } = require('../controllers');

router.get('/', ctrl.getAllContactsCTRL);
router.post('/', ctrl.addContactCTRL);
router.get('/:id', ctrl.getContactByIdCTRL);
router.put('/:id', ctrl.updateContactByIdCTRL);
router.delete('/:id', ctrl.deleteContactCTRL);

module.exports = router;
