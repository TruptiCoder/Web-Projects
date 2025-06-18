// server/sockets/podChat.js
const Pod = require('../models/Pod');
const User = require("../models/User.js");

const handlePodChat = (io) => {
  io.on('connection', (socket) => {
    console.log(`🟢 Socket connected: ${socket.id}`);

    // Join a pod room
    socket.on('join-pod', ({ podId }) => {
      socket.join(podId);
      console.log(`📦 Socket ${socket.id} joined pod ${podId}`);
    });

    // Handle incoming messages
    socket.on('send-message', async ({ podId, senderId, message }) => {
      const timestamp = new Date();

      // Save message to DB (optional but useful)
      await Pod.findByIdAndUpdate(podId, {
        $push: {
          messages: {
            senderId,
            message,
            timestamp,
          },
        },
      });

      const sender = await User.findById(senderId);
      // Emit to everyone in pod
      io.to(podId).emit('receive-message', {
        senderId,
        anonymousName: sender.anonymousName,
        message,
        timestamp,
      });
    });

    socket.on('disconnect', () => {
      console.log(`🔴 Socket disconnected: ${socket.id}`);
    });
  });
};

module.exports = handlePodChat;
