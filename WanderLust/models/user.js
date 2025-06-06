const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    }
})

// username and password passport will define it automatically.

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);