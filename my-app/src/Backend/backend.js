//Get express module
const express = require('express');
const app = express();

//Set routers
const router_users = express.Router();
router_users.use(express.json());
app.use('/api/users',router_users);

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

//Assign a port
let port = 3000;
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