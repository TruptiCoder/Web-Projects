import express from "express";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { Server } from "socket.io";
import {createServer} from "http";
import cors from "cors";
import {router as authRouter} from "./routes/auth.routes.js";
import {router as msgRouter} from './routes/msg.routes.js';
import {router as contactRouter} from "./routes/contact.routes.js";
import { Msg } from "./models/msg.model.js";
import { timeStamp } from "console";

const port = 5000;
const app = express();

const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    }
});

app.use(cors({
    origin: "*",
    methods: "*",
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/auth", authRouter);
app.use("/api/contact", contactRouter);
app.use("/api", msgRouter);

const users = {};

io.on("connection", (socket) => {

    socket.on("join", (userId) => {
        users[userId] = socket.id;
        console.log(`${userId} joined with id ${socket.id}`);
    });

    socket.on("send_msg", async (data) => {
        const {senderId, receiverId, content} = data;

        const newMsg = new Msg({
            sender: senderId,
            receiver: receiverId,
            content: content
        });
        await newMsg.save();

        const receiverSocket = users[receiverId];
        if(receiverSocket) {
            io.to(receiverSocket).emit("receive_msg", {
                senderId,
                content,
                time: newMsg.time,
            });
        }
    });

    socket.on("disconnect", () => {
        for(const key in users) {
            if(users[key] === socket.id) delete users[key];
        }
    })
})

app.get("/", (req, res) => {
    res.send("hello");
})

server.listen(port, async () => {
    await mongoose.connect("mongodb://localhost:27017/chat-app");
    console.log(`Server is Listening on ${port}`);
})