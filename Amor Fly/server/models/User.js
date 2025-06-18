// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  skills: [String], // e.g. ["guitar", "cooking"]
  personality: {
    type: String, // e.g. "introvert", "extrovert", or a code
    required: true,
  },
  anonymousName: {
    type: String,
    required: true,
  },
  currentPod: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pod',
    default: null,
  },
  points: {
    type: Number,
    default: 0,
  },
  connectionsMade: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      connectedAt: Date,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', userSchema);
