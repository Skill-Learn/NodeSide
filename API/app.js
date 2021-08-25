const express = require("express");
const mongoose  = require("mongoose");

const app = express();

// mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://localhost:27017/SkillDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

// ROUTES
// the home/default route

app.get("/", (req, res) => {
    res.send("We are home")
    
});

// to start listening to the server
app.listen(3000);
 