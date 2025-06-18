// server/routes/pods.js
const express = require('express');
const router = express.Router();
const { joinPod } = require('../controllers/podController');

// POST /api/pods/join
router.post('/join', joinPod);

module.exports = router;
