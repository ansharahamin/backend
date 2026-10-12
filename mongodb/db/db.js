import mongoose from "mongoose";

async function main() {
  try {
    await mongoose.connect("mongodb+srv://insharahamin1250_db_user:8cckfVacEqk1RT5T@cluster0.hbxeyvj.mongodb.net/post");
    console.log("connected to db");
  } catch (err) {
    console.log("DB connection error:", err.message);
  }
}

export default main;