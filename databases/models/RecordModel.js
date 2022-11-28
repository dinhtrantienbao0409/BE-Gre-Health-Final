const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require("mongoose-paginate-v2");

const RecordSchema = new Schema(
  {
    doctorName: String,
    doctorEmail: String,
    doctorAddress: String,
    doctorContact: String,
    username: String,
    userGender: String,
    userDateOfBirth: String,
    userAddress: String,
    userContact: String,
    dentalSymtoms: String,
    diagnosis: String,
    treatmentPlan: String,
    doctorId: String,
    userId: String,
  },
  {
    timeStamp: true,
  }
);

RecordSchema.plugin(mongoosePaginate);

const Record = mongoose.model("Record", RecordSchema);

module.exports = Record;
