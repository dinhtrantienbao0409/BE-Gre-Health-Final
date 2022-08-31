require("dotenv").config();
const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    // Connect to the MongoDB cluster
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" Mongoose connect successfully");
  } catch (error) {
    console.log("🚀 ~ file: connect.js ~ line 13 ~ connect ~ error", error);
  }
};

const disconnectDb = async () => {
  try {
    // await mongoose.disconnect();
    await mongoose.connection.close();
  } catch (error) {
    console.log(
      "🚀 ~ file: connect.js ~ line 22 ~ disconnectDb ~ error",
      error
    );
  }
};

module.exports = { connectDb, disconnectDb };
