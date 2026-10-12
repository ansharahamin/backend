import mongoose from "mongoose";
const postSchema = new mongoose.Schema({
    title:String,
    desc:String,
    age:Number
})

const postModel = mongoose.model('post',postSchema)

export default postModel