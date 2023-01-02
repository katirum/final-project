/* require('dotenv').config()
import express from "express";
import cors from "cors";
import events from "./data/events"
import mongoose from "mongoose";
import dotenv from "dotenv"; */
/* import connectDB from "./config/db"; */

/* const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-mongo";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;
 */
// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
/* const port = process.env.PORT || 8080;
const app = express(); */
/* dotenv.config(); */

/* connectDB(); */
// Add middlewares to enable cors and json body parsing
/* app.use(cors());
app.use(express.json());

const ThoughtsSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 140,
    trim: true
  },
  heart: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: () => new Date()
  }
})

const Thought = mongoose.model("Thought", ThoughtsSchema);

app.get("/thoughts", async (req, res) => {
  const thoughts = await Thought.find().sort({createdAt: 'desc'}).limit(20).exec();
  res.json(thoughts);
});

app.post("/thoughts", async (req, res) => {
  const {message, createdAt} = req.body;
  try{
    const savedThought = await new Thought({message: message, createdAt: createdAt}).save();
    res.status(201).json({success: true, response: savedThought});
  }catch (err){
    res.status(400).json({success: false, message:'cannot post thoughts'})
  }
});

app.patch("/thoughts/:id/heart", async (req, res) => {
  const { id } = req.params;
  try{
    const heartsUpdate = await Thought.findByIdAndUpdate(id, {$inc: {heart: 1}});
    res.status(200).json({success: true, response: `Thought ${heartsUpdate.message} has their heart updated`});
  } catch (error) {
    res.status(400).json({success: false, response: error});
  }
})



const EventsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  
  description: {
    type: String,
    required: true,
    trim: true
  },
  language: {
    type: String
  },
  city: {
    type: String
  },
  createdAt: {
    type: Date,
    default: () => new Date()
  }
})

const Event = mongoose.model("Event", EventsSchema);

app.get("/events", async (req, res) => {
  const events = await Event.find().sort({createdAt: 'desc'}).limit(20).exec();
  res.json(events);
});

app.post("/events", async (req, res) => {
  const {title, description, language, city, createdAt} = req.body;
  try{
    const savedEvent = await new Event({title: title, description: description, language: language, city: city, createdAt: createdAt}).save();
    res.status(201).json({success: true, response: savedEvent});
  }catch (err){
    res.status(400).json({success: false, message:'cannot post events'})
  }
});

app.patch("/thoughts/:id/heart", async (req, res) => {
  const { id } = req.params;
  try{
    const heartsUpdate = await Thought.findByIdAndUpdate(id, {$inc: {heart: 1}});
    res.status(200).json({success: true, response: `Thought ${heartsUpdate.message} has their heart updated`});
  } catch (error) {
    res.status(400).json({success: false, response: error});
  }
})
 */






// Start defining your routes here
/* app.get("/", (req, res) => {
  res.send("Hello Technigo!");
});

app.get("/api/events", (req, res) => {
  res.json(events)
})

app.get("/api/events/:id", (req, res) => {
  const event = events.find((n) => n._id === req.params.id);
  res.send(event);
})
 */

// Start the server
/* app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
 */

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/my-happy-project";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;


const ThoughtsSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 140,
    trim: true
  },
  heart: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: () => new Date()
  }
})

const Thought = mongoose.model("Thought", ThoughtsSchema);

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Happy Thoughts!");
});

app.get("/thoughts", async (req, res) => {
  const thoughts = await Thought.find().sort({createdAt: 'desc'}).limit(20).exec();
  res.json(thoughts);
});

app.post("/thoughts", async (req, res) => {
  const {message, createdAt} = req.body;
  try{
    const savedThought = await new Thought({message: message, createdAt: createdAt}).save();
    res.status(201).json({success: true, response: savedThought});
  }catch (err){
    res.status(400).json({success: false, message:'cannot post thoughts'})
  }
});

app.patch("/thoughts/:id/heart", async (req, res) => {
  const { id } = req.params;
  try{
    const heartsUpdate = await Thought.findByIdAndUpdate(id, {$inc: {heart: 1}});
    res.status(200).json({success: true, response: `Thought ${heartsUpdate.message} has their heart updated`});
  } catch (error) {
    res.status(400).json({success: false, response: error});
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


