import userModel from "../src/models/user.model.js";
import crypto from 'crypto'



export async function register(req, res) {
    const {username, email, password} = req.body;

    const isAlreadyRegister = await userModel.findOne({
        $or: [
            {username},
            {email}
        ]
    })

    if(isAlreadyRegister) {

        res.status(409).json({
            message: "Username or email already exist"
        })
    }

    const hashPassword = crypto.createHash("sha256").update(password).digest("hex");
    const user = await userModel.create({
        username,
        email,
        password: hashPassword
    })

    
}