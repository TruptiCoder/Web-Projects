import express from "express";
import { createServer } from "node:http";
import dotenv from "dotenv";
dotenv.config();

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit: "40kb"}));
app.use(express.urlencoded({limit: "40kb", extended: true}));

const start = async() => {
    const connectionDb = await mongoose.connect(process.env.MONGO_URL);
    server.listen(app.get("port"), () => {
        console.log(`MONGO connected DB Host: ${connectionDb.connection.host}`)
        console.log("Listening on port 8000");
    });
}

start();