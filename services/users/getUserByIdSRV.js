const { User } = require('../../models');

const getUserByIdSRV = async id => {
  try {
    return await User.findById(id);
  } catch (error) {
    if (error.message.includes('Cast to ObjectId failed')) {
      return null;
    }
    throw error;
  }
};

module.exports = getUserByIdSRV;
