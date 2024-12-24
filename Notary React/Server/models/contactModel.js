// models/contactModel.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;