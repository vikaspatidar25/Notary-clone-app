const Appoint = require('../models/appointment');

const createAppoint = async (req, res) => {
  const { name, email, selectdate } = req.body;

  try {
    const newAppoint = new Appoint({ name, email, selectdate });
    await newAppoint.save();
    res.status(201).json({ message: 'booked appointment successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error booking appointment', error });
  }
};

module.exports = {
  createAppoint
};