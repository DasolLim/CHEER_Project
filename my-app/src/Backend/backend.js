//Get express module
const express = require('express');
const app = express();

//Get mongoose module
// const mongoose = require('mongoose');

// //Initialize database
// mongoose.connect('mongodb://localhost/users'); //CHANGE FROM 'LOCALHOST' IN LATER SPRINTS
// const db = mongoose.connection;
// db.on('error', (error) => console.log(error));
// db.once('open', () => console.log('Succesful connection to the database'));

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
const db = client.db(CHEER);
const users = db.collection('users');

//Assign a port
let port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));