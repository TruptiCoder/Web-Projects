// client/src/pages/PodChat.jsx
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000'); // adjust if deployed

function PodChat() {
  const { podId } = useParams();
  const user = JSON.parse(localStorage.getItem('user'));
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (!user || !podId) return;

    socket.emit('join-pod', { podId });

    socket.on('receive-message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off('receive-message');
    };
  }, [podId]);

  useEffect(() => {
    // Scroll to bottom on new message
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim()) {
      socket.emit('send-message', {
        podId,
        senderId: user._id,
        message: input.trim(),
      });


      setInput('');
    }
  };

  return (
    <div className="pod-chat">
      <h2>✈️ Flight Pod Chat</h2>
      <div className="chat-box" style={{ maxHeight: '400px', overflowY: 'auto' }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: '10px' }}>
            <strong>{msg.anonymousName}:</strong> {msg.message}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="chat-input" style={{ marginTop: '10px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default PodChat;
