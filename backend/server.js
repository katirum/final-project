require('dotenv').config()
import express from "express";
import cors from "cors";
import events from "./data/events"
import mongoose from "mongoose";
import dotenv from "dotenv";
/* import connectDB from "./config/db"; */

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-mongo";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();
/* dotenv.config(); */

/* connectDB(); */
// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Hello Technigo!");
});

app.get("/api/events", (req, res) => {
  res.json(events)
})

app.get("/api/events/:id", (req, res) => {
  const event = events.find((n) => n._id === req.params.id);
  res.send(event);
})

//Trisl
app.post("/api/createevent", async (req, res) => {
  const {title, content} = req.body;
  try{
    const savedEvent= await new Event({title: title, content: content}).save();
    res.status(201).json({success: true, response: savedEvent});
  }catch (err){
    res.status(400).json({success: false, message:'cannot post thoughts'})
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});



