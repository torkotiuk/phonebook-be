const { Contact } = require('../../models');

const deleteContactSRV = async id => {
  try {
    return await Contact.findByIdAndDelete(id);
  } catch (error) {
    if (error.message.includes('Cast to ObjectId failed')) {
      return null;
    }
    throw error;
  }
};

module.exports = deleteContactSRV;
