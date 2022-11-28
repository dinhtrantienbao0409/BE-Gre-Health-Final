const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require("mongoose-paginate-v2");

const ExaminationFormSchema = new Schema(
  {
    username: String,
    userId: String,
    doctorId: String,
    receptionId: String,
    gender: String,
    dateOfBirth: String,
    address: String,
    contact: String,
    email: String,
    reason: String,
    examinationHistory: String,
    dentalProblem: String,
    diseaseSymptoms: String,
    dateRequest: String,
  },
  {
    timeStamp: true,
  }
);

ExaminationFormSchema.plugin(mongoosePaginate);

const ExaminationForm = mongoose.model(
  "ExaminationForm",
  ExaminationFormSchema
);

module.exports = ExaminationForm;
