const User = require("../databases/models/UserModel");

const CreateUser = async ({
  email,
  password,
  role,
  name,
  address,
  contact,
  dateOfBirth,
  gender,
  jobTitle,
}) => {
  try {
    const createdUser = await User.create({
      email,
      password,
      role,
      name,
      address,
      contact,
      dateOfBirth,
      gender,
      jobTitle,
    });
    return createdUser;
  } catch (error) {
    console.log("🚀 ~ file: authRepository.js ~ line 26 ~ error", error);
  }
};
const FindUserByOption = async (option) => {
  try {
    const user = await User.findOne(option);
    return user;
  } catch (error) {
    console.log(
      "🚀 ~ file: authRepository.js ~ line 8 ~ findUserByOption ~ error",
      error
    );
  }
};
const FindUserByCondition = async (condition) => {
  try {
    const users = await User.find(condition);
    return users;
  } catch (error) {
    console.log(
      "🚀 ~ file: authRepository.js ~ line 47 ~ FindUserByCondition ~ error",
      error
    );
  }
};

const UpdateUser = async (userId, body) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, body);
    return updatedUser;
  } catch (error) {
    console.log(
      "🚀 ~ file: authRepository.js ~ line 59 ~ UpdateUser ~ error",
      error
    );
  }
};

const FindUserByRole = async (role) => {
  try {
    const users = await User.find(role);
    return users;
  } catch (error) {
    console.log(
      "🚀 ~ file: authRepository.js ~ line 72 ~ FindUserByRole ~ error",
      error
    );
  }
};
const DeleteUserByOption = async (option) => {
  try {
    const deletedUser = await User.deleteOne(option);
    return deletedUser;
  } catch (error) {
    console.log(
      "🚀 ~ file: authRepository.js ~ line 82 ~ DeleteUserByOption ~ error",
      error
    );
  }
};
const DeleteUserByCondition = async (condition) => {
  try {
    const deletedUser = await User.findByIdAndDelete(condition);
    return deletedUser;
  } catch (error) {
    console.log(
      "🚀 ~ file: authRepository.js ~ line 82 ~ DeleteUserByOption ~ error",
      error
    );
  }
};
module.exports = {
  FindUserByCondition,
  FindUserByOption,
  CreateUser,
  UpdateUser,
  FindUserByRole,
  DeleteUserByOption,
  DeleteUserByCondition,
};
