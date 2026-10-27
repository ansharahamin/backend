import userModel from "../models/users.models.js";
import productModel from "../models/products.model.js";
import uploadFile from '../../services/storage.service.js'
async function createProducts(req,res){
if (!req.file) {
  return  res.status(400).json({message:'image is required'})
}
const {name,des}=req.body
console.log(req.file);

const uploadImage = await uploadFile(
    req.file.buffer,
    req.file.originalname
)
console.log(uploadImage);
const product = await productModel.create({
    image:uploadImage.url,
    name,des,
    admin:req.user.id
})
res.status(201).json({
    messsage:'product added',
    product
})
    
}
async function getProducts(req,res){
    try {
        const products = await productModel.find().populate("admin","userName email")
        res.status(200).json({message:"data is fetched successfully"},products)
    } catch (error) {
        res.status(500).json({message:'failed to fetched',err:error.message})
    }
}
export {createProducts,getProducts}