import express from "express";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { Server } from "socket.io";
import {createServer} from "http";
import cors from "cors";
import {router as authRouter} from "./routes/auth.routes.js"

const port = 5000;
const app = express();

const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["*"],
        credentials: true
    }
});

app.use(cors({
    origin: "http://localhost:5173",
    methods: "*",
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/auth", authRouter);

io.on("connection", (socket) => {
    console.log("User connected", socket.id);

    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
    })
})

app.get("/", (req, res) => {
    res.send("hello");
})

server.listen(port, async () => {
    await (await mongoose.connect("mongodb://localhost:27017/chat-app"));
    console.log(`Server is Listening on ${port}`);
})