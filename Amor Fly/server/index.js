// server/server.js
const http = require('http');
const { Server } = require('socket.io');
const app = require('./app');
const dotenv = require('dotenv');
const handlePodChat = require('./sockets/podChat');

dotenv.config();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

// ⬇️ Use modular socket handler
handlePodChat(io);

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
