const { User } = require('../../models');

const findUserSRV = filter => {
  return User.findOne(filter);
};

module.exports = findUserSRV;
