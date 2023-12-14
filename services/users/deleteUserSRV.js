const { User } = require('../../models');

const deleteUserSRV = async id => {
  try {
    return await User.findByIdAndDelete(id);
  } catch (error) {
    if (error.message.includes('Cast to ObjectId failed')) {
      return null;
    }
    throw error;
  }
};

module.exports = deleteUserSRV;
