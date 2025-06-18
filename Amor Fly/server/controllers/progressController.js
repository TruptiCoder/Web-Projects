// server/controllers/progressController.js
const User = require('../models/User.js');

const submitProgress = async (req, res) => {
  try {
    const { userId, description, link } = req.body;

    // Just simulate recording a progress entry
    // (You can later add a Progress model or embed in Pod)

    // Increase user points (e.g. +5 per valid update)
    const user = await User.findById(userId);
    user.points += 5;
    await user.save();

    res.status(200).json({
      message: 'Progress submitted successfully',
      currentPoints: user.points,
    });
  } catch (err) {
    console.error('Progress submit error:', err);
    res.status(500).json({ message: 'Server error during progress update' });
  }
};

const submitFeedback = async (req, res) => {
  try {
    const { reviewerId, targetUserId, feedbackScore } = req.body;

    const user = await User.findById(targetUserId);
    if (!user) return res.status(404).json({ message: 'Target user not found' });

    // Score ranges: 1 (low) to 5 (high)
    const pointsEarned = Math.max(0, Math.min(10, feedbackScore * 2));
    user.points += pointsEarned;

    await user.save();

    res.status(200).json({
      message: 'Feedback recorded',
      pointsAwarded: pointsEarned,
      totalPoints: user.points,
    });
  } catch (err) {
    console.error('Feedback error:', err);
    res.status(500).json({ message: 'Server error during feedback' });
  }
};

module.exports = { submitProgress, submitFeedback };
