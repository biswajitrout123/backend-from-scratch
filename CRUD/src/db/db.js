// LOGIC TO CONNECT DB TO SERVER

const mongoose = require("mongoose");


async function connectDB() {
    await mongoose.connect("mongodb+srv://biswa:Biswa123@backend.tbl8gal.mongodb.net/halley")

    console.log("Connected to DB");
}

module.exports = connectDB;