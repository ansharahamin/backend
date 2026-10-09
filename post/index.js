import express from 'express';
import app from "./src/app.js";
import db from "./db/db.js"
const port = 3000;

db()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});