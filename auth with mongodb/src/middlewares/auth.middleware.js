import jwt from "jsonwebtoken"
import userModel from '../models/users.models.js'
export async function authenticateToken(req,res,next) {
        const token = req.cookies.token
    console.log(req.cookies);
    if(!token){
      return  res.status(409).json({message:'unauthorise'})
    }
    try {
        req.user = jwt.verify(token,process.env.JWT_SECRET)
        console.log(req.user);
        const user = await userModel.findById(req.user.id)

        if (!user || user.role !== 'admin') {
           return res.status(403).json({
            message:'forbidden'
           })
        }

        next()
    } catch (error) {
        res.status(500).json({
            message:'internal server error',
            err:error.message
        })
    }
}