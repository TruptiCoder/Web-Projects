// server/utils/generateAnonymousName.js
const adjectives = ['Sky', 'Calm', 'Bright', 'Silent', 'Wise', 'Bold', 'Swift'];
const animals = ['Fox', 'Wave', 'Owl', 'Leaf', 'Tiger', 'Falcon', 'Bear'];

function generateAnonymousName() {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = animals[Math.floor(Math.random() * animals.length)];
  return `${adj}${noun}`;
}

module.exports = generateAnonymousName;
