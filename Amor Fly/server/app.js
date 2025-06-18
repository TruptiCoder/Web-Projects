// server/app.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const podRoutes = require('./routes/pods');
const connectionRoutes = require('./routes/connections');
const progressRoutes = require('./routes/progress');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing form data
app.use('/api/auth', authRoutes);
app.use('/api/pods', podRoutes);
app.use('/api/connections', connectionRoutes);
app.use('/api/progress', progressRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes (example placeholder)
app.get('/', (req, res) => {
  res.send('Welcome to Amor Fly API 🚀');
});

module.exports = app;
