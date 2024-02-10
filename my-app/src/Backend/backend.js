//Get express module
const express = require('express');
const app = express();

//Set routers
const router_users = express.Router();
router_users.use(express.json());
app.use('/api/users', router_users);

const router_events = express.Router();
router_events.use(express.json());
app.use('/api/events', router_events);

const router_attendees = express.Router();
router_attendees.use(express.json());
app.use('/api/attendees', router_attendees);

//Setup middleware to do logging
app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
})

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ansonruan4:kcvVzdvmkH1Vco4b@se3350-22.99v1apl.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
//Checking that a connection can be formed
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
//Run the connection check
run().catch(console.dir);

//Database of users
const db = client.db("CHEER");
const users = db.collection('users');
const events = db.collection('events');
const attendees = db.collection('attendees');

//Assign a port
let port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

//USERS FUNCTIONALITIES ------------------------------------------------------------------------------------------------------------------------------
//Register new parent user
router_users.post('/register', async (req, res) => {
  try {
    //Open client
    await client.connect();
    //Get login information from HTML body
    const login = req.body;
    //Create a document to be inserted
    const doc = {
      username: login.username,
      password: login.password,
      email: login.email,
      type: "Parent",
      accounts: [],
    }
    //Insert into database
    await users.insertOne(doc);
    //Send status response
    res.status(200).send('Registration Complete');
  } catch (error) {
    //Send status response
    res.status(400).send('Bad Request');
  } finally {
    //Close client
    await client.close();
  }
});

//Login a parent user
router_users.post('/login', async (req, res) => {
  try {
    console.log('hello')
    const credentials = req.body;
    //Open client
    await client.connect();
    console.log('rawr')
    //Login query
    const query = {
      email: credentials.email,
      password: credentials.password
    }
    const results = await users.findOne(query);
    console.log(results);
    if (results)
      res.status(200).send(results);
  } catch (error) {
    //Send status response
    res.status(400).send('Bad Request');
  } finally {
    //Close client
    await client.close();
  }
});

//Delete a parent user
router_users.delete('/delete', async (req, res) => {
  try {
    await client.connect();
    const username = req.body;
    await users.deleteOne(username);
    res.status(200).send('Deletion Successful');
  } catch (error) {
    res.status(404).send('User not found');
  } finally {
    await client.close();
  }
});

//ATTENDEE FUNCTIONALITIES ------------------------------------------------------------------------------------------------------------------------------
router_events.post('/signup', async (req, res) => {
  try {
    //Open client
    await client.connect();
    //Get login information from HTML body
    const event = req.body;
    //Create a document to be inserted
    const doc = {
      full_name: event.full_name,
      email: event.email
    }
    //Insert into database
    await events.insertOne(doc);
    //Send status response
    res.status(200).send('Registration Complete');
  } catch (error) {
    //Send status response
    res.status(400).send('Bad Request');
  } finally {
    //Close client
    await client.close();
  }
});

//EVENT FUNCTIONALITIES ------------------------------------------------------------------------------------------------------------------------------
router_events.post('/create', async (req, res) => {
  try {
    // Get the next event ID
    const eventID = await getNextEventID();
    // Get login information from HTML body
    const event = req.body;
    // Create a document to be inserted
    const doc = {
      eventID: eventID,
      description: event.description,
      event_name: event.name,
      start_time: event.start_time,
      end_time: event.end_time,
      date: event.date,
      capacity: event.capacity
    };
    // Insert into database
    await events.insertOne(doc);
    // Send status response
    res.status(200).send('Event Created');
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).send('Internal Server Error');
  }
});

//auto increment eventID
async function getNextEventID() {
  try {
    // Connect to MongoDB
    await client.connect();
    // Query for the maximum event ID
    const maxIDDocument = await events.find({}, { eventID: 1 }).sort({ eventID: -1 }).limit(1).toArray();
    // If there are documents with event IDs
    if (maxIDDocument.length > 0) {
      // Extract the maximum event ID
      const maxID = maxIDDocument[0].eventID;
      // Return the next event ID
      return maxID + 1;
    } else {
      // If no documents in the collection yet, start with 1
      return 1;
    }
  } catch (error) {
    console.error('Error fetching max event ID:', error);
    throw error;
  }
}


//ALL DATES MUST BE IN FORMAT: 'YYYY-MM-DD'
//get all events on a specifc date
router_events.get('/:date', async (req, res) => {
  const date = req.params.date;
  try {
    await client.connect();
    //get the event names and IDs for the queried date
    const event_list = await events.find({ date: date }).project({ event_name: 1, eventID: 1 }).toArray();
    res.json(event_list);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(404).send('No events on date');
  } finally {
    await client.close();
  }
});

//return all the dates in which there are events for a specific month/year
router_events.get('/monthly/:monthAndYear', async (req, res) => {
  const month_and_year = req.params.monthAndYear;
  try {
    await client.connect();
    //get the event names and IDs for the queried date
    const event_list = await events.find({ date: {$regex: month_and_year, $options: 'i'} }).project({ date: 1, eventID: 1 }).toArray();
    res.json(event_list);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(404).send('No events on date');
  } finally {
    await client.close();
  }
});


//return info of specific event based on ID
router_events.get('/event/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await client.connect();
    //get the event names and IDs for the queried date
    const event_list = await events.findOne({eventID: id});
    res.json(event_list);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(404).send('No events on date');
  } finally {
    await client.close();
  }
});
