const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require("mongoose-paginate-v2");

const PatientSchema = new Schema(
  {
    name: String,
    gender: String,
    contact: String,
    email: String,
  },
  {
    timeStamp: true,
  }
);

PatientSchema.plugin(mongoosePaginate);

const Patient = mongoose.model("Patient", PatientSchema);

module.exports = Patient;
