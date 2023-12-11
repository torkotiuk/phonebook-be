const { Contact } = require('../../models');

const getContactByIdSRV = async id => {
  try {
    return await Contact.findById(id);
  } catch (error) {
    if (error.message.includes('Cast to ObjectId failed')) {
      return null;
    }
    throw error;
  }
};

module.exports = getContactByIdSRV;
