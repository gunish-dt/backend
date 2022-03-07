const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");
//require("dotenv").config();

//const db = "process.env.DB_BASE_URL";
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(process.env.DB_BASE_URL);

    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
