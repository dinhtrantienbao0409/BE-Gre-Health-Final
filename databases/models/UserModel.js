const mongoose = require("mongoose");
const { Schema } = mongoose;

const mongoosePaginate = require("mongoose-paginate-v2");

const {
  ADMIN_ROLE,
  PATIENT_ROLE,
  RECEPTIONIST_ROLE,
  DOCTOR_ROLE,
  USER_ROLE,
} = require("../../constants/role");

const UserSchema = new Schema(
  {
    email: String,
    password: String,
    role: {
      type: String,
      enum: [
        ADMIN_ROLE,
        PATIENT_ROLE,
        RECEPTIONIST_ROLE,
        DOCTOR_ROLE,
        USER_ROLE,
      ],

      require: true,
      default: "user",
    },
    name: String,
    address: String,
    contact: String,
    dateOfBirth: String,
    gender: String,
    jobTitle: String,
  },
  {
    timeStamp: true,
  }
);

UserSchema.plugin(mongoosePaginate);

const User = mongoose.model("User", UserSchema);

module.exports = User;
