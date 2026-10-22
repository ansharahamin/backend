import mongoose from 'mongoose'
const productsSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    des:{
        type:String,
        required:true
    },
    admin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    }
})
const productModel = mongoose.model('product',productsSchema)
export default productModel