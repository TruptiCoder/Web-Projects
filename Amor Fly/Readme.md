# Amor Fly ✈️

**Amor Fly** is a skill-based, anonymous community platform built for authentic human connection through shared learning journeys. Instead of bios and profiles, users bond in small “Flight Pods” by sharing progress, feedback, and growth.

## 🚀 Features

- 🔐 User signup/login with anonymous identities
- 🧠 Skill & personality-based pod matching (max 6 per pod)
- 💬 Real-time anonymous group chat (Socket.io)
- 🗓️ Weekly 1:1 connection unlocking based on engagement
- ✅ Progress tracking and peer feedback
- 📊 Point system rewarding consistency and contribution

---

## 🛠 Tech Stack

| Frontend        | Backend         | Real-Time Chat | Database | File Upload (Optional) |
|-----------------|------------------|----------------|----------|-------------------------|
| React (Vite)    | Node.js + Express| Socket.io      | MongoDB  | Cloudinary              |

---

## 🖥️ Local Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/your-username/amor-fly.git
cd amor-fly

# 2. Install root dependencies (concurrently)
npm install

# 3. Setup backend
cd server
npm install
touch .env
# Add MONGO_URI and PORT to .env

# 4. Setup frontend
cd ../client
npm install

# 5. Run both servers
cd ..
npm run dev
