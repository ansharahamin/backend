import express from "express"
import postModel from "../model/schema.js";
import main from '../db/db.js'
const app = express();
app.use(express.json())


const user = [{"title":"Ansharah","desc":"amin","id":"1"},{"title":"insharah","desc":"amin","id":"2"}]
app.get('/users', async (req, res) => {
  const data = req.body
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
      res.status(500).send({message:error.message})
    }
  
   
});

app.delete('/users/:id',(req,res)=>{
  let userId = user.findIndex(u=>u.id == Number(req.params.id))
  if(userId == -1){
    res.send({message:'user Not Found'})
  }else{
    user.splice(userId,1)
    res.send({message:'User Deleted Successfully'})
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