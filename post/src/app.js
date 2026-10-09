import express from "express"
const app = express();
app.use(express.json())


const user = [{"userName":"Ansharah","id":"1"},{"userName":"insharah","id":"2"}]
app.get('/users', (req, res) => {
  res.send(user);
});
app.post('/users', (req, res) => {
    console.log(req);
    user.push({id:user.length+1,...req.body})
    res.send({message: 'User created successfully'});
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