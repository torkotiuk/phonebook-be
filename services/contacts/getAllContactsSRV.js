const { Contact } = require('../../models');

const getAllContactsSRV = () => {
  return Contact.find({});
};

module.exports = getAllContactsSRV;
