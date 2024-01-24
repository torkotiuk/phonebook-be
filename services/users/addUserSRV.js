const bcrypt = require('bcryptjs');
const { User } = require('../../models');

const addUserSRV = ({ email, password }) => {
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  return User.create({ email, password: hashPassword });
};

module.exports = addUserSRV;
