const { Contact } = require('../../models');

const updateContactByIdSRV = async (id, body) => {
  try {
    return await Contact.findByIdAndUpdate(id, body, { new: true });
  } catch (error) {
    if (error.message.includes('Cast to ObjectId failed')) {
      return null;
    }
    throw error;
  }
};

module.exports = updateContactByIdSRV;
