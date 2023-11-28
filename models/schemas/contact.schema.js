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
    match: [
      /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
      'Please fill the number in formats (123) 456-7890 or 123-456-7890',
    ],
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

module.exports = contactSchema;