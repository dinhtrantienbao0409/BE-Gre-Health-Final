const mongoose = require("mongoose");
const { Schema } = mongoose;

const RecordSchema = new Schema(
  {
    name: String,
    gender: String,
    dateOfBirth: Date,
    address: String,
    age: String,
    contact: String,
    healthCondition: String,
    doctorSuggestion: String,
  },
  {
    timeStamp: true,
  }
);

const Record = mongoose.model("Record", RecordSchema);

module.exports = Record;
