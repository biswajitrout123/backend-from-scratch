const mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect("mongodb+srv://biswa:Biswa123@backend.tbl8gal.mongodb.net/project-1")

    console.log("Connected to DB");
}

module.exports = connectDB;
