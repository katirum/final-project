import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/final-project";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

const EventsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
   /*  minlength: 5,
    maxlength: 50, */
    trim: true
  },
  description: {
    type: String,
    required: true,
    /* minlength: 50,
    maxlength: 500, */
    trim: true
  },/*,
   image: {
    type: 
  }, */
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
  /* required: true,  */
  },
  eventDate: {
    type: String, 
    /* required: true, */
  },
  startDate: {
    type: String, 
    /* required: true, */
  },
  endDate: {
    type: String, 
    /* required: true, */
  },
  /* eventTime: {
    type: String,
    required: true
  }, */
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
/* dotenv.config(); */

/* connectDB(); */
// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());


// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Events!");
});

app.get("/events", async (req, res) => {
  const events = await Event.find().sort({createdAt: 'desc'}).limit(20).exec();
  res.json(events);
});

app.post("/events", async (req, res) => {
  const {title, description, language, city, eventDate, place, createdAt, /* */} = req.body;
  try{
    const savedEvent = await new Event({title: title, description: description, language: language, city: city, eventDate: eventDate, place: place, createdAt: createdAt /**/}).save();
    res.status(201).json({success: true, response: savedEvent});
  }catch (err){
    res.status(400).json({success: false, message:'cannot post event'})
  }
});

app.patch("/events/:id", async (req, res) => {
  const { id } = req.params;
  try{
    const eventsUpdate = await Event.findByIdAndUpdate(id,  title, description, language, city, date);
    res.status(200).json({success: true, response: `Thought ${eventsUpdate.title} has their heart updated`});
  } catch (error) {
    res.status(400).json({success: false, response: error});
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});



