import mongoose from 'mongoose'
import userModel from '../models/users.models.js'
import productModel from '../models/products.model.js'
try {
    const productId = req.body.productId
const quentity = Number(req.body.quentity)||1
if(!mongoose.Types.ObjectId.isValid(productId)){
    return res.status(400).json({message:'invalid product id'})
}
if(quentity>1){
    return res.status(400).json({message:'quentity must be a positive integer'})
}
const product = await productModel.findById(productId)  ///product db ma  exist karti ha ya nhi??
if (!product) {
    return res.status(400).json({message:'product not found'})
}
const user = await userModel.findById(req.user.id)  ///user logged in ha ke nhi???
if (!user) {
    return res.status.json({message:'user not found'})
}
const cartItem = user.cart.find(item => item.product.toString() === productId)  //cart ma product mojood ha??
if (cartItem) {   //truthy value
    cartItem.quentity += quentity  //db ki quentity ma increment kia variable se
} else {
    user.cart.push({product:productId,quentity:quentity})  //falsy (cart empty to new obj push karo db ma quentity user ki assigned quentity ke barabar kardo)
}
await user.save()
} catch (error) {
    
}


