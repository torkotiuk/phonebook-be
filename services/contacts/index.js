const addContactSRV = require('./addContactSRV');
const getAllContactsSRV = require('./getAllContactsSRV');
const getContactByIdSRV = require('./getContactByIdSRV');
const updateContactByIdSRV = require('./updateContactByIdSRV');
const deleteContactSRV = require('./deleteContactSRV');
const deleteManyContactsSRV = require('./deleteManyContactsSRV');

module.exports = {
  getAllContactsSRV,
  addContactSRV,
  getContactByIdSRV,
  updateContactByIdSRV,
  deleteContactSRV,
};
