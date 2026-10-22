import userModel from '../models/users.models.js'
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs"
async function registerUser(req,res){
    try {
        const {userName,email,password,role} = req.body
        const userAlreadyExists = await userModel.findOne({
            $or:[
                {userName},
                {email}
            ]
        })
        if(userAlreadyExists){
            return res.status(409).json({message:'user is already exists'})
        }
        const hash = await bcrypt.hash(password,10)
        const user = await userModel.create({userName,email,password:hash,role})
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{ expiresIn: "1d" })
        res.cookie('token',token,{ httpOnly: true })
        res.status(201).json({
    message: "User created successfully",
    user
})

    } catch (error) {
        console.log(error);
        res.status(500).json({message:'internal server error',
            error : error.message
        })
    }
}
export {registerUser}