// server/routes/progress.js
const express = require('express');
const router = express.Router();
const {
  submitProgress,
  submitFeedback,
} = require('../controllers/progressController');

// POST /api/progress/submit
router.post('/submit', submitProgress);

// POST /api/progress/feedback
router.post('/feedback', submitFeedback);

module.exports = router;
