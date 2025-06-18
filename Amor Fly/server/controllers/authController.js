// server/controllers/authController.js
const bcrypt = require('bcrypt');
const User = require('../models/User.js');
const generateAnonymousName = require('../utils/generateAnonymousName.js');

// Signup
const signup = async (req, res) => {
  try {
    const { email, password, skills, personality } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const anonymousName = generateAnonymousName();

    const newUser = new User({
      email,
      password: hashedPassword,
      skills,
      personality,
      anonymousName,
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully', anonymousName });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ message: 'Server error during signup' });
  }
};

// Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    res.status(200).json({
      message: 'Login successful',
      _id: user._id,
      anonymousName: user.anonymousName,
      skills: user.skills,
      personality: user.personality,
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error during login' });
  }
};

module.exports = { signup, login };
