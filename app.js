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

var corsOptions = {
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  origin: "*",
  methods: GET,
  HEAD,
  PUT,
  PATCH,
  POST,
  DELETE,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

// Init Middleware
app.use(express.json({ extended: false }));
app.options("*", cors());

//app.get("/", (req, res) => res.sendStatus(200));

// use Routes
app.use("/api/books", books);

app.get("/", cors(corsOptions), function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST");
  res.header("Access-Control-Allow-Headers", "accept, content-type");
  res.header("Access-Control-Max-Age", "1728000");
  return res.sendStatus(200);
});

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
