import express from 'express';

const app = express();
app.use(express.json())
const port = 3000;

const user = [{"userName":"Ansharah","id":"1"},{"userName":"insharah","id":"2"}]
app.get('/users', (req, res) => {
  res.send(user);
});
app.post('/users', (req, res) => {
    console.log(req.body);
res.send('post request')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});