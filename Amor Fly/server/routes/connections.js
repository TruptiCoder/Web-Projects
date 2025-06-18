// server/routes/connections.js
const express = require('express');
const router = express.Router();
const { connectOneToOne } = require('../controllers/connectionController');

// POST /api/connections/unlock
router.post('/unlock', connectOneToOne);

module.exports = router;
