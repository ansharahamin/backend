import mongoose from "mongoose";
import "dotenv/config"
import dns from 'node:dns/promises'
dns.setServers(['8.8.8.8','1.1.1.1'])
async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to db");
  } catch (err) {
    console.log("DB connection error:", err.message);
  }
}

export default main;