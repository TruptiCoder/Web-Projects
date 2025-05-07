import mongoose from "mongoose";

const msgSchema = mongoose.Schema({
    sender: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    receiver: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    time: {
        type: Date,
        default: Date.now
    }
});

const Msg = mongoose.model("Msg", msgSchema);

export {Msg};