const express = require('express');
const router = express.Router();
const { createAppoint } = require('../controllers/AppointmentController');

router.post('/', createAppoint);

module.exports = router;