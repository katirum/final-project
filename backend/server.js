import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/final-project";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

//EVENT SCHEMA
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
    minlength: 10,
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
  place: {
    type: String,
  required: true, 
  },
  eventDate: {
    type: String, 
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => new Date()
  }
})

const Event = mongoose.model("Event", EventsSchema);

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());


// ROUTES
app.get("/", (req, res) => {
  res.send("Events!");
});

// all events
 app.get("/events", async (req, res) => {
  const events = await Event.find().sort({createdAt: 'desc'}).exec();
  res.json(events);
});

// One event
app.get("/events/:id", async (req, res) => {
  const oneEvent = await Event.findById(req.params.id);
  res.json(oneEvent);
});

// post a new event
app.post("/events", async (req, res) => {
  const {title, description, language, city, eventDate, place, createdAt, time/* */} = req.body;
  try{
    const savedEvent = await new Event({title: title, description: description, language: language, city: city, eventDate: eventDate, place: place, time: time, createdAt: createdAt /**/}).save();
    res.status(201).json({success: true, response: savedEvent});
  }catch (err){
    res.status(400).json({success: false, message:'cannot post event'})
  }
});


// IN PROGRESS: edit an event
app.patch("/events/:id", async (req, res) => {
  const { id } = req.params;
  try{
    const eventsUpdate = await Event.findByIdAndUpdate(id,  title, description, language, city, date, time);
    res.status(200).json({success: true, response: `Thought ${eventsUpdate.title} has their heart updated`});
  } catch (error) {
    res.status(400).json({success: false, response: error});
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});



