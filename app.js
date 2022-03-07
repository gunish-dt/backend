// app.js

const express = require("express");
const connectDB = require("./config/db");
var cors = require("cors");

// routes
const books = require("./routes/api/books");

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));
app.options("*", cors());

app.get("/", (req, res) => res.send("Hello world!"));

// use Routes
app.use("/api/books", books);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
