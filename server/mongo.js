// const mongoose = require("mongoose")
// mongoose.connect("mongodb://0.0.0.0:27017/group22")
//     .then(() => {
//         console.log("mongodb connected");
//     })
//     .catch(() => {
//         console.log('failed');
//     })


// const newSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     userType: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// })

// const collection = mongoose.model("collection", newSchema)

// module.exports = collection

const mongoose = require("mongoose");

// Update the MongoDB connection URI to match your deployment
const mongoURI = "mongodb+srv://ansonruan4:kcvVzdvmkH1Vco4b@se3350-22.99v1apl.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.error("MongoDB connection failed:", err.message);
    });

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    userType: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure email uniqueness
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model("User", userSchema); // Use a more descriptive model name, like "User"

module.exports = User;
