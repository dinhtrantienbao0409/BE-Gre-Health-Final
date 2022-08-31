const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require("mongoose-paginate-v2");

const DoctorSchema = new Schema(
  {
    name: String,
    gender: String,
    age: String,
    contact: String,
    email: String,
  },
  {
    timeStamp: true,
  }
);

DoctorSchema.plugin(mongoosePaginate);

const Doctor = mongoose.model("Doctor", DoctorSchema);

module.exports = Doctor;
