// client/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import JoinPod from './pages/JoinPod';
import PodChat from './pages/PodChat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/join-pod" element={<JoinPod />} />
        <Route path="/pod-chat/:podId" element={<PodChat />} />
      </Routes>
    </Router>
  );
}

export default App;
