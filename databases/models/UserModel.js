const mongoose = require("mongoose");
const { Schema } = mongoose;
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
  },
  {
    timeStamp: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
