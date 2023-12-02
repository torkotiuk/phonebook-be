const { Contact } = require('../../models');

const addContactSRV = newContactObj => {
  return Contact.create(newContactObj);
};

module.exports = addContactSRV;
