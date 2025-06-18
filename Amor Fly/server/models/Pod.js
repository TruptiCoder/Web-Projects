// server/models/Pod.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  message: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const podSchema = new mongoose.Schema({
  skill: {
    type: String,
    required: true,
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  isFull: {
    type: Boolean,
    default: false,
  },
  messages: [messageSchema], // Optional if you want message persistence
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Pod', podSchema);
