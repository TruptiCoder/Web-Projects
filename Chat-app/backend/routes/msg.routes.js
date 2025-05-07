import express from "express";
import { Msg } from "../models/msg.model.js";
import { User } from "../models/user.model.js";

const router = express.Router();

router.get("/msg/:user1/:user2", async (req, res) => {
    const { user1, user2 } = req.params;

    if (!user1 || !user2) {
        return res.status(400).json({ message: "Both users must be specified" });
    }

    try {
        const msgs = await Msg.find({
            $or: [
                { sender: user1, receiver: user2 },
                { sender: user2, receiver: user1 },
            ],
        }).sort("time").lean();

        const formattedMsgs = msgs.map(msg => ({
            ...msg,
            senderId: msg.sender.toString(),
            receiverId: msg.receiver.toString(),
        }));

        res.status(200).json({
            status: "success",
            data: formattedMsgs,
        });
    } catch (err) {
        console.error("Error fetching messages:", err);
        res.status(500).json({ message: "Error fetching messages" });
    }
});

router.get("/:username/user", async (req, res) => {
    try {
        const { username } = req.params;
        const user = await User.findOne({username});
        if(!user) return res.status(400).json({msg: "Invalid credentials"});
        res.status(200).json({status: "success" , user: {id: user._id, name: user.name, username: user.username}});
    } catch (err) {
        console.error("Error fetching user:", err);
        res.status(500).json({ message: "Error fetching user" });
    }
});

export {router};