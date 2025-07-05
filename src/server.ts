import express, { Application, Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";
import bookRoute from "./modules/book/book.route";
import borrowRoute from "./modules/borrow/borrow.route";

const app: Application = express();

// middlewares
app.use(
  cors({
    origin: [
      "https://l2b5a4frontend.vercel.app",
      "http://localhost:5173",
      "https://l2b5a4frontend-9bbb587mw-zakir-naiks-projects.vercel.app",
      "http://localhost:5177",
    ],
  })
);
app.use(express.json());

// routes
app.use("/", bookRoute);
app.use("/", borrowRoute);

// server
app.get("/", (req, res) => {
  res.send({ success: true, message: "Minimal Library Management System" });
});

app.listen(config.port, () => {
  console.log(`✅ Server is running on port ${config.port}`);
});

// mongo database
async function server() {
  try {
    await mongoose.connect(config.database_url!);
    console.log(`✅ Connected to Mongo Database`);
  } catch (error) {
    console.log(`❌ Server error ${server}`);
  }
}

server();
