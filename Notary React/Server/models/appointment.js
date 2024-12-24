const mongoose = require('mongoose');

const appointSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  selectdate: { type: String, required: true }
});

const Appoint = mongoose.model('Appoint', appointSchema);

module.exports = Appoint;