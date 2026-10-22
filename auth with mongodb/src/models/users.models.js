import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        dafault:'user',
        enum:["user","admin"]
    }
})
const userModel = mongoose.model('users',userSchema)
export default userModel