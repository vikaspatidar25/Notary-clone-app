// controllers/contactController.js
const Contact = require('../models/contactModel');

const createContact = async (req, res) => {
  const { firstname, lastname, email, message } = req.body;

  try {
    const newContact = new Contact({ firstname, lastname, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving contact', error });
  }
};

module.exports = {
  createContact
};
