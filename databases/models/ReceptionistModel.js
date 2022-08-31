const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require("mongoose-paginate-v2");

const ReceptionistSchema = new Schema(
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
ReceptionistSchema.plugin(mongoosePaginate);

const Receptionist = mongoose.model("Receptionist", ReceptionistSchema);

module.exports = Receptionist;
