import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/final-project";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=8080 npm start
const port = process.env.PORT || 8080;
const app = express();
/* dotenv.config(); */

/* connectDB(); */
// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

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
  /* image: {
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
  location: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
  Type: String,
  /* required: true, */
  },
  createdAt: {
    type: Date,
    default: () => new Date()
  }
})

const Event = mongoose.model("Event", EventsSchema);

// TO CREATE A NEW EVENT
export const createEvent = async (req, res) => {
  // const { userId } = req.params;
  const { title, description, language, city, location, date, time } = req.body;
  // const user = await User.findById(hostId)
  const user = await User.findOne({ accessToken: req.header("Authorization") });
  console.log(user)
  try {
    const newEvent = await new Event({
      userId,
      title,
      description,
      language,
      city,
      location,
      date,
      time,
    }).save();
    res.status(201).json({
      success: true,
      response: {
        title: newEvent.title,
        description: newEvent.description,
        language: newEvent.language,
        city: newEvent.city,
        location: newEvent.location,
        time: newEvent.time,
        date: newEvent.date,
        eventId: newEvent._id,
        message: "Event created"
      }
    });
    await User.findByIdAndUpdate(user._id, { $addToSet: { hostingEvents: newEvent } })
  } catch (err) {
    res.status(500).json({
      success: false,
      response: err
    });
  }
};

//middleware to check tokens

function checkAuth(req, res, next) {
  if (req.headers.authtoken) {
    admin.auth().verifyIdToken(req.headers.authtoken)
      .then((token) => {
        if (token) {
          next()
        }
        /* console.log(token) */
        
      }).catch(() => {
        res.status(403).send('Unauthorized')
      });
  } else {
    res.status(403).send('Unauthorized')
  }
}
app.use('/', checkAuth)



// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Events!");
});

// ENDPOINTS


app.get("/user", checkAuth);
app.get("/user", /* getUserInfo */);

// THIS ALLOWS THE USER TO CHANGE THE EMAIL AND THE PASSWORD
app.patch("/user", checkAuth);
app.patch("/user",/*  updateUserInfo */);

app.delete("/user", checkAuth);
app.delete("/user",/*  deleteUser */);

// ------------------------------------ EVENTS ----------------------------------------
// ENDPOINT TO CREATE EVENTS ONLY WHEN AUTHENTICATED
app.post("/event", checkAuth);
app.post("/event", createEvent);

//If user is not authnticated they get limited info about the events, if user is authenticated they get all event info.
app.get("/event", /* getEvents */);


//NOTE: WE COULD ADD A FIELD TO MAKE THE USER CHOOSE A NAME FOR THE EVENT
// This allows the user to delete an event
app.delete("/event", checkAuth);
app.delete("/event", /* deleteEvent */);

// CHECK IF WE NEED TO ALLOW ALL INFO TO BE CHANGED WITH ELIN
// CHECK IF WE NEED CONST USER
app.patch("/event", checkAuth);
app.patch("/event", /* updateEvent */);

// GAMMAL KOD!!!

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
})

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
