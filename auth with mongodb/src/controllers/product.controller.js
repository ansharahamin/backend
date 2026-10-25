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
export {createProducts}