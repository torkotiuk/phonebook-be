const { User } = require('../../models');

const getAllUsersSRV = () => {
  return User.find({});
};

module.exports = getAllUsersSRV;
