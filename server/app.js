// const express = require("express")
// const collection = require("./mongo")
// const cors = require("cors")
// const app = express()
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))
// app.use(cors())



// app.get("/", cors(), (req, res) => {

// })


// app.post("/", async (req, res) => {
//     const { name, userType, email, password } = req.body

//     try {
//         const check = await collection.findOne({ email: email })

//         if (check) {
//             res.json("exist")
//         }
//         else {
//             res.json("notexist")
//         }

//     }
//     catch (e) {
//         res.json("fail")
//     }

// })



// app.post("/signup", async (req, res) => {
//     const { name, userType, email, password } = req.body

//     const data = {
//         name: name,
//         userType: userType,
//         email: email,
//         password: password
//     }

//     try {
//         const check = await collection.findOne({ email: email })

//         if (check) {
//             res.json("exist")
//         }
//         else {
//             res.json("notexist")
//             await collection.insertMany([data])
//         }

//     }
//     catch (e) {
//         res.json("fail")
//     }

// })

// app.listen(8000, () => {
//     console.log("port connected");
// })

const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
const uri = "mongodb+srv://ansonruan4:kcvVzdvmkH1Vco4b@se3350-22.99v1apl.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Connected to MongoDB!");
    } finally {
        await client.close();
    }
}
run().catch(console.dir);

const db = client.db("CHEER");
const users = db.collection("users");
const events = db.collection("events");
const calendar = db.collection("calendar");

app.get("/", cors(), (req, res) => {
    // Add your code for the root route if needed
});

app.post("/", async (req, res) => {
    // Add your code for the existing POST route if needed
});

app.post("/signup", async (req, res) => {
    const { name, userType, email, password } = req.body;

    const data = {
        name: name,
        userType: userType,
        email: email,
        password: password,
    };

    try {
        const check = await collection.findOne({ email: email });

        if (check) {
            res.json("exist");
        } else {
            res.json("notexist");
            await collection.insertMany([data]);
        }
    } catch (e) {
        res.json("fail");
    }
});

// USERS FUNCTIONALITIES --------------------------------------------------------------
app.post("/api/users/register", async (req, res) => {
    try {
        await client.connect();
        const login = req.body;
        const doc = {
            username: login.username,
            password: login.password,
            email: login.email,
            type: "Parent",
            accounts: [],
        };
        await users.insertOne(doc);
        res.status(200).send('Registration Complete');
    } catch (error) {
        res.status(400).send('Bad Request');
    } finally {
        await client.close();
    }
});

app.delete("/api/users/delete", async (req, res) => {
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

// EVENTS FUNCTIONALITIES --------------------------------------------------------------
app.post("/api/events/signup", async (req, res) => {
    try {
        await client.connect();
        const event = req.body;
        const doc = {
            full_name: event.full_name,
            email: event.email,
        };
        await events.insertOne(doc);
        res.status(200).send('Registration Complete');
    } catch (error) {
        res.status(400).send('Bad Request');
    } finally {
        await client.close();
    }
});

// CALENDAR FUNCTIONALITIES --------------------------------------------------------------
app.post("/api/calendar/create", async (req, res) => {
    try {
        await client.connect();
        const event = req.body;
        const doc = {
            description: event.description,
            event_name: event.full_name,
            start_time: event.start_time,
            end_time: event.end_time,
            date: event.date,
            capacity: event.capacity,
            attendees: event.attendees,
        };
        await calendar.insertOne(doc);
        res.status(200).send('Signup Complete');
    } catch (error) {
        res.status(400).send('Bad Request');
    } finally {
        await client.close();
    }
});

const port = 8000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
