import {User} from "../models/user.model.js";
import bcrypt from "bcrypt";

const register = async (req, res) => {
    const {name, username, password} = req.body;

    try {
        const userExists = await User.findOne({username});

        if(userExists) return res.status(400).json({msg: "Username already taken"});

        const newUser = new User({name, username, password});
        await newUser.save();

        res.status(201).json({msg: "User registered successfully"});
    } catch (e) {
        res.status(500).json({msg: "Server error"});
    }
};

const login = async (req, res) => {
    const {username, password} = req.body;

    try {
        const user = await User.findOne({username});
        if(!user) return res.status(400).json({msg: "Invalid credentials"});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({msg: "Invalid credentials"});

        res.status(200).json({msg: "Login successful", user: {id: user._id, name: user.name, username: user.username}});
    } catch(e) {
        res.status(500).json({msg: "Server error"});
    }
}

export {register, login};