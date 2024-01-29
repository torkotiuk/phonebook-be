const { User } = require('../../models');

const updateUserByIdSRV = (id, updateInfo) => {
  return User.findByIdAndUpdate(id, updateInfo, { new: true });
};

module.exports = updateUserByIdSRV;
