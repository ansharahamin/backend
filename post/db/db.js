import mongoose from "mongoose";
import dns from 'node:dns/promises'
dns.setServers(['1.1.1.1','8.8.8.8'])
async function main() {
  try {
    await mongoose.connect("mongodb+srv://insharahamin1250_db_user:8cckfVacEqk1RT5T@cluster0.hbxeyvj.mongodb.net/post");
    console.log("connected to db");
  } catch (err) {
    console.log("DB connection error:", err.message);
  }
}

export default main;