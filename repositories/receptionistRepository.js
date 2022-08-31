const Receptionist = require("../databases/models/ReceptionistModel");

const CreateReceptionist = async ({ name, gender, age, contact, email }) => {
  try {
    const createdReceptionist = await Receptionist.create({
      name,
      gender,
      age,
      contact,
      email,
    });
    return createdReceptionist;
  } catch (error) {
    console.log(
      "🚀 ~ file: receptionistRepository.js ~ line 14 ~ CreateReceptionist ~ error",
      error
    );
  }
};

const FindAllReceptionists = async (conditions, options) => {
  try {
    const receptionists = await Receptionist.paginate(conditions, options);
    return receptionists;
  } catch (error) {
    console.log(
      "🚀 ~ file: receptionistRepository.js ~ line 26 ~ FindAllReceptionists ~ error",
      error
    );
  }
};

const FindReceptionistByOption = async (option) => {
  try {
    const receptionist = await Receptionist.findOne(option);
    return receptionist;
  } catch (error) {
    console.log(
      "🚀 ~ file: receptionistRepository.js ~ line 38 ~ FindReceptionistByOption ~ error",
      error
    );
  }
};

const DeleteReceptionist = async (receptionistId) => {
  try {
    const deletedReceptionist = Receptionist.findByIdAndDelete(receptionistId);
    return deletedReceptionist;
  } catch (error) {
    console.log(
      "🚀 ~ file: receptionistRepository.js ~ line 50 ~ DeleteReceptionist ~ error",
      error
    );
  }
};

const UpdateReceptionist = async (receptionistId, body) => {
  try {
    const updatedReceptionist = await Receptionist.findByIdAndUpdate(
      receptionistId,
      body
    );
    return updatedReceptionist;
  } catch (error) {
    console.log(
      "🚀 ~ file: receptionistRepository.js ~ line 62 ~ UpdateReceptionist ~ error",
      error
    );
  }
};

module.exports = {
  CreateReceptionist,
  FindAllReceptionists,
  FindReceptionistByOption,
  DeleteReceptionist,
  UpdateReceptionist,
};
