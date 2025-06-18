// client/src/pages/Dashboard.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [connectionMessage, setConnectionMessage] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (!stored) {
      navigate('/');
    } else {
      setUser(JSON.parse(stored));
    }
  }, []);

  const handleJoinPod = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/pods/join', {
        userId: user._id,
      });

      setMessage(res.data.message);
      setTimeout(() => navigate(`/pod-chat/${res.data.podId}`), 1000);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Failed to join pod.');
    }
  };

  const handleUnlockConnection = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/connections/unlock', {
        userId: user._id,
      });

      const match = res.data.match;
      setConnectionMessage(
        `🎉 You matched with ${match.anonymousName} (Skill: ${match.skill}, Type: ${match.personality})`
      );
    } catch (err) {
      setConnectionMessage(err.response?.data?.message || 'Unable to unlock connection.');
    }
  };

  const handleSubmitProgress = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/progress/submit', {
        userId: user._id,
        description: 'Shared a new learning update!',
        link: 'https://example.com', // Optional
      });

      setMessage(`Progress submitted. You now have ${res.data.currentPoints} points.`);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Failed to submit progress.');
    }
  };

  return (
    <div className="dashboard">
      <h2>Welcome, {user?.anonymousName}!</h2>
      <p><strong>Skills:</strong> {user?.skills.join(', ')}</p>
      <p><strong>Personality:</strong> {user?.personality}</p>

      <button onClick={handleJoinPod}>Join Pod</button>
      <button onClick={handleSubmitProgress}>Submit Progress</button>
      <button onClick={handleUnlockConnection}>Unlock 1:1 Connection</button>

      {message && <p>{message}</p>}
      {connectionMessage && <p>{connectionMessage}</p>}
    </div>
  );
}

export default Dashboard;
