import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
/* import connectDB from "./config/db"; */

import userRoutes from './routes/userRoutes'



const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/final-project";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();
dotenv.config();
/* connectDB(); */

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());
/* 
const EventsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
    trim: true
  },
  
  description: {
    type: String,
    required: true,
    minlength: 50,
    maxlength: 500,
    trim: true
  },
  language: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => new Date()
  }
})

const Event = mongoose.model("Event", EventsSchema); */

//From MERN
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/notes", (req, res) => {
  res.json(events);
});

app.use("/api/users", userRoutes)


//OLD CODE
// Start defining your routes here
/* app.get("/", (req, res) => {
  res.send("Events!");
});

app.get("/events", async (req, res) => {
  const events = await Event.find().sort({createdAt: 'desc'}).limit(20).exec();
  res.json(events);
});

app.post("/events", async (req, res) => {
  const {title, description, language, city, location, createdAt} = req.body;
  try{
    const savedEvent = await new Event({title: title, description: description, language: language, city: city, location: location, createdAt: createdAt}).save();
    res.status(201).json({success: true, response: savedEvent});
  }catch (err){
    res.status(400).json({success: false, message:'cannot post event'})
  }
});

app.patch("/events/:id", async (req, res) => {
  const { id } = req.params;
  try{
    const eventsUpdate = await Event.findByIdAndUpdate(id, title, description, language, city, location);
    res.status(200).json({success: true, response: `Thought ${eventsUpdate.title} has their heart updated`});
  } catch (error) {
    res.status(400).json({success: false, response: error});
  }
}) */

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


/* const PORT = process.env.PORT || 8080;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`
  )
); */

