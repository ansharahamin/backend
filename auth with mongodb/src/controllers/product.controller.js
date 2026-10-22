import productModel from "../models/products.model.js";
import jwt from 'jsonwebtoken';
import userModel from "../models/users.models.js";
async function createProducts(req,res){
    const token = req.cookies.token
    console.log(req.cookies);
    if(!token){
      return  res.status(409).json({message:'unauthorise'})
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        console.log(decoded);
        const user = await userModel.findById(decoded.id)

        if (!user || user.role !== 'admin') {
           return res.status(403).json({
            message:'forbidden'
           })
        }
        // const product = await productModel.create({

        // })
    } catch (error) {
        res.status(500).json({
            message:'internal server error',
            err:error.message
        })
    }
res.status(201).json({
    messsage:'post created'
})
    
}
export {createProducts}