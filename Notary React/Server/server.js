// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactRoutes');
const appointRoutes = require('./routes/appointRoutes');
const app = express();
// const port = 5000;

dotenv.config();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/appoint',appointRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
  console.log(`Server running on http://localhost:${PORT}`);
});
