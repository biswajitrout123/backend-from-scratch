const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
    const { username, email, password } = req.body;

    /*

     const existingUser = await userModel.findOne({ email });

    if (existingUser) {
        return res.status(400).json({
            message: "Email already registered"
        });
    }

    */

    const user = await userModel.create({
        username, email, password
    })

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(201).json({
        message: "User register successfully",
        user
    })
}

module.exports = { registerUser }