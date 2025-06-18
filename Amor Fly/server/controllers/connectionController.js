// server/controllers/connectionController.js
const User = require('../models/User.js');

const connectOneToOne = async (req, res) => {
  try {
    const { userId } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Enforce 1 connection per week
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const recentConnection = user.connectionsMade.find(
      (c) => new Date(c.connectedAt) > oneWeekAgo
    );

    if (recentConnection) {
      return res.status(403).json({ message: 'Weekly connection limit reached' });
    }

    // Basic engagement check: require points > 10
    if (user.points < 10) {
      return res.status(403).json({ message: 'Insufficient engagement to unlock connection' });
    }

    // Try to find a compatible user with same skill and personality
    const potentialMatch = await User.findOne({
      _id: { $ne: user._id },
      skills: { $in: user.skills },
      personality: user.personality,
      'connectionsMade.userId': { $ne: user._id },
    });

    if (!potentialMatch) {
      return res.status(404).json({ message: 'No compatible users found at the moment' });
    }

    // Add each other as connections
    user.connectionsMade.push({ userId: potentialMatch._id, connectedAt: new Date() });
    potentialMatch.connectionsMade.push({ userId: user._id, connectedAt: new Date() });

    await user.save();
    await potentialMatch.save();

    res.status(200).json({
      message: '1:1 connection unlocked',
      match: {
        anonymousName: potentialMatch.anonymousName,
        skill: potentialMatch.skills[0],
        personality: potentialMatch.personality,
      },
    });
  } catch (err) {
    console.error('1:1 Connection error:', err);
    res.status(500).json({ message: 'Server error during connection' });
  }
};

module.exports = { connectOneToOne };
