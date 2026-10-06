import express from 'express';
const app = express();
const PORT = 3000
const users = [
    {id:1,name:'John Doe'},
    {id:2,name:'Jane Doe'},
    {id:3,name:'Jim Doe'}
]
console.log('Hello World')
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/about',(req,res)=>{
    console.log('About Page')
    res.send('About Page')
})
app.get('/users/:id',(req,res)=>{

    res.json(users.find(user=>user.id==req.params.id))
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});