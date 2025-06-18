// server/controllers/podController.js
const Pod = require('../models/Pod.js');
const User = require('../models/User.js');

// Matches user to an appropriate pod or creates a new one
const joinPod = async (req, res) => {
  try {
    const { userId } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (user.currentPod) {
      return res.status(200).json({ message: 'Already in a pod', podId: user.currentPod });
    }

    const skill = user.skills[0]; // For now, match by primary skill
    const personality = user.personality;

    // Try to find a pod with the same skill that is not full
    let pod = await Pod.findOne({
      skill,
      isFull: false,
    });

    if (!pod) {
      // Create a new pod if none exists
      pod = new Pod({ skill, members: [user._id] });
    } else {
      // Add user to existing pod
      pod.members.push(user._id);
      if (pod.members.length >= 6) pod.isFull = true;
    }

    await pod.save();

    // Update user's current pod
    user.currentPod = pod._id;
    await user.save();

    res.status(200).json({ message: 'Joined pod successfully', podId: pod._id });
  } catch (err) {
    console.error('Join Pod error:', err);
    res.status(500).json({ message: 'Server error while joining pod' });
  }
};

module.exports = { joinPod };
