// client/src/pages/Signup.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const skillOptions = ['guitar', 'mindfulness', 'cooking', 'drawing', 'coding'];
const personalityOptions = ['introvert', 'extrovert', 'balanced'];

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    skills: [],
    personality: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSkillToggle = (skill) => {
    setFormData((prev) => {
      const newSkills = prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill];
      return { ...prev, skills: newSkills };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || !formData.personality || formData.skills.length === 0) {
      setMessage('All fields are required.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', formData);
      setMessage(res.data.message + ' Welcome, ' + res.data.anonymousName + '!');
      setTimeout(() => navigate('/'), 1500);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Signup failed.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />

        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />

        <div>
          <h4>Select Skills:</h4>
          {skillOptions.map((skill) => (
            <label key={skill}>
              <input
                type="checkbox"
                checked={formData.skills.includes(skill)}
                onChange={() => handleSkillToggle(skill)}
              />
              {skill}
            </label>
          ))}
        </div>

        <div>
          <h4>Personality Type:</h4>
          {personalityOptions.map((p) => (
            <label key={p}>
              <input
                type="radio"
                name="personality"
                value={p}
                checked={formData.personality === p}
                onChange={handleChange}
              />
              {p}
            </label>
          ))}
        </div>

        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account? <a href="/">Log in</a>
      </p>
    </div>
  );
}

export default Signup;
