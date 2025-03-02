const initData = require("./data.js");
const mongoose = require("mongoose");
const Listing = require("../models/listing.js");

main()
.then(() => {
    console.log("Connected to Database");
})
.catch((err) => {
    console.log(err);
})

async function main() {
    mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

// To initialize the data
const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "67c44738968774f9753bbef3"}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB();