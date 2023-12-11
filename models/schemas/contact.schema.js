const { Schema } = require('mongoose');
const validator = require('mongoose-validator');

const contactSchema = Schema({
  name: {
    type: String,
    minlength: 2,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    validate: [
      validator({
        validator: 'isEmail',
        message: 'Oops..please enter valid email',
      }),
    ],
  },
  phone: {
    type: String,
    required: true,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

module.exports = contactSchema;
