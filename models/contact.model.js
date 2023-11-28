const { model } = require('mongoose');
const { contactSchema } = require('./schemas');

const Contact = model('product', contactSchema);

module.exports = Contact;
