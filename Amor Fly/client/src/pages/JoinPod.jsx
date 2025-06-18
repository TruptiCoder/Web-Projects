// client/src/pages/JoinPod.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function JoinPod() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const joinPod = async () => {
      if (!user) {
        navigate('/');
        return;
      }

      try {
        const res = await axios.post('http://localhost:5000/api/pods/join', {
          userId: user._id,
        });

        setMessage(res.data.message);
        setTimeout(() => navigate(`/pod-chat/${res.data.podId}`), 1500);
      } catch (err) {
        setMessage(err.response?.data?.message || 'Failed to join pod.');
      } finally {
        setLoading(false);
      }
    };

    joinPod();
  }, []);

  return (
    <div className="join-pod-page">
      <h2>🔄 Joining your Flight Pod...</h2>
      {loading ? <p>Please wait...</p> : <p>{message}</p>}
    </div>
  );
}

export default JoinPod;
