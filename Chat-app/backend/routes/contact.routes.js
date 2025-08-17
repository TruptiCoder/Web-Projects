import express from "express";
import { User } from "../models/user.model.js";
import { Contact } from "../models/contact.model.js";

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const { username, currentUserId } = req.body;

    // find the searched user
    const searchedUser = await User.findOne({ username });
    if (!searchedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // find or create current user's contact list
    let contactList = await Contact.findOne({ user: currentUserId });
    if (!contactList) {
      contactList = await Contact.create({ user: currentUserId, contacts: [] });
    }

    // check if already in contacts
    if (contactList.contacts.includes(searchedUser._id)) {
      return res.status(200).json({ message: "Already in contacts" });
    }

    // add new contact
    contactList.contacts.push(searchedUser._id);
    await contactList.save();

    res.status(201).json({ message: "Contact added", contactList });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const contactList = await Contact.findOne({ user: userId })
      .populate("contacts", "username name"); 

    if (!contactList) {
      return res.status(200).json({ contacts: [] });
    }

    res.status(200).json({ contacts: contactList.contacts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export { router };