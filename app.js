const express = require("express");
const mongoose = require("mongoose");
const app = express();

// TO USE ENVIRONMENT VARIABLE
require("dotenv/config");

// TO PARSE DATA AS JSON WHEN SENT TO THE DATABASE

app.use(express.json());

// Connect MongoDB at default port 27017.
mongoose.connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);

// ROUTES
// Bring home some routes

const postsRoute = require("./routes/posts");
const userRoute = require("./routes/auth");

app.use("/posts", postsRoute);
app.use("/auth", userRoute);

// the home/default route
app.get("/", (req, res) => {
  res.send("We are home");
});

// to start listening to the server
app.listen(3000);
