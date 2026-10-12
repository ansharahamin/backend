import express from "express"
import postModel from "../model/schema.js";
import main from '../db/db.js'
const app = express();
app.use(express.json())


const user = [{"title":"Ansharah","desc":"amin","id":"1"},{"title":"insharah","desc":"amin","id":"2"}]
app.get('/users', async (req, res) => {
  try {
      const data = req.body
      const post = await postModel.find()
      res.status(200).json({message:'post displayed!',post})
  } catch (error) {
    res.status(500).json({message:error.message})
  }
  
});
app.post('/users', async (req, res) => {
    try {
      const data = req.body
      const newPost = await postModel.create({
        title: data.title,
        desc: data.desc
      })
      res.status(201).json({message:'Post created!'})
    } catch (error) {
      res.status(500).json({message:error.message})
    }
  
   
});

//express delete
// app.delete('/users/:id',async (req,res)=>{
//   let userId = user.findIndex(u=>u.id == Number(req.params.id))
//   if(userId == -1){
//     res.send({message:'user Not Found'})
//   }else{
//     user.splice(userId,1)
//     res.send({message:'User Deleted Successfully'})
//   }
// })
//mongo delete

pp.delete('/users/:id', async (req, res) => {
  try {
    const id = req.params.id
    const deleted = await postModel.findByIdAndDelete(id)
    if(!deleted){
      res.status(404).json({message:"post not found"})
    }
  } catch (error) {
res.status(500).json({message:error.message})
  }
})
app.put('/users/:id',(req,res)=>{
let userId= user.findIndex(v=>v.id == Number(req.params.id))
if(userId == -1){
  res.send({message:'user Not Found'})
}else{
  user.splice(userId,1,{id:Number(req.params.id),...req.body})
  res.send({message:'user Updated Successfully'})
}
})
export default app