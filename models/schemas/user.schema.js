const { Schema } = require('mongoose');

const userSchema = Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  token: {
    type: String,
    default: null,
  },
});

module.exports = userSchema;
