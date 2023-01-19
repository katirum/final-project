import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';


const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/final-project";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

// USER SCHEMA
/* const userSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  // other fields
});

const User = mongoose.model('User', userSchema); */

/* app.post('/save-uid', (req, res) => {
  const { uid } = req.body;
  const user = new User({ uid });
  user.save((error) => {
    if (error) {
      res.send({ error });
    } else {
      res.send({ message: 'UID saved successfully' });
    }
  });
}); */



//EVENT SCHEMA
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
  time: {
    type: String,
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
/* dotenv.config(); */

/* connectDB(); */
// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());
/* app.use(cookieParser()); */


// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Events!");
});

 app.get("/events", async (req, res) => {
  const events = await Event.find().sort({createdAt: 'desc'}).limit(20).exec();
  res.json(events);
});

app.get("/events/:id", async (req, res) => {
  const oneEvent = await Event.findById(req.params.id);
  res.json(oneEvent);
});

/* app.get("/events/:idToken", async (req, res) => {
  const events = await Event.find().sort({createdAt: 'desc'}).limit(20).exec();
  res.json(events);
}); */

app.post("/events", async (req, res) => {
  const {title, description, language, city, eventDate, place, createdAt, time/* */} = req.body;
  try{
    const savedEvent = await new Event({title: title, description: description, language: language, city: city, eventDate: eventDate, place: place, time: time, createdAt: createdAt /**/}).save();
    res.status(201).json({success: true, response: savedEvent});
  }catch (err){
    res.status(400).json({success: false, message:'cannot post event'})
  }
});

app.patch("/events/:id", async (req, res) => {
  const { id } = req.params;
  try{
    const eventsUpdate = await Event.findByIdAndUpdate(id,  title, description, language, city, date, time);
    res.status(200).json({success: true, response: `Thought ${eventsUpdate.title} has their heart updated`});
  } catch (error) {
    res.status(400).json({success: false, response: error});
  }
})

/* app.post('/saveUid', (req, res) => {
  const { uid } = req.body;
  // validate the uid
  if (validateUid(uid)) {
    // Save the uid to the Mongoose schema
    User.create({ uid }, (error) => {
      if (error) {
        res.status(500).send({ success: false, message: error });
      } else {
        res.status(200).send({ success: true, message: 'UID saved successfully' });
      }
    });
  } else {
    res.status(400).send({ success: false, message: 'Invalid UID' });
  }
}); */



/* app.post('/saveUid', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, 'yoursecretkey', function(err, decoded) {
     if (err) {
       res.status(401).json({ error: 'Token is invalid' });
     }
     else {
      const User = mongoose.model('User', userSchema);
      const newUser = new User({ uid: req.body.uid });
      newUser.save((error) => {
        if (error) {
          res.status(500).json({error: "Error saving the uid"})
        } else {
          res.status(200).json({ success: true });
        } */


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});



