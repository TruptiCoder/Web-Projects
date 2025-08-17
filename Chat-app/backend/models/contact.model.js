import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
        unique: true,
    },
    contacts: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "User"
        }
    ]
}, {timestamps: true});

const Contact = mongoose.model("Contact", contactSchema);
export { Contact };