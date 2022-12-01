const ExaminationForm = require("../databases/models/ExaminationFormModel");

const CreateForm = async ({
  username,
  userId,
  doctorId,
  receptionId,
  gender,
  dateOfBirth,
  address,
  contact,
  email,
  reason,
  examinationHistory,
  dentalProblem,
  diseaseSymptoms,
  dateRequest,
}) => {
  try {
    const createdForm = await ExaminationForm.create({
      username,
      userId,
      doctorId,
      receptionId,
      gender,
      dateOfBirth,
      address,
      contact,
      email,
      reason,
      examinationHistory,
      dentalProblem,
      diseaseSymptoms,
      dateRequest,
    });
    return createdForm;
  } catch (error) {
    console.log("🚀 ~ file: formRepository.js ~ line 26 ~ error", error);
  }
};

const FindAllForms = async (condition) => {
  try {
    const forms = await ExaminationForm.find(condition);
    return forms;
  } catch (error) {
    console.log(
      "🚀 ~ file: formRepository.js ~ line 35 ~ FindAllForms ~ error",
      error
    );
  }
};

const FindFormByOption = async (option) => {
  try {
    const form = await ExaminationForm.findOne(option);
    return form;
  } catch (error) {
    console.log(
      "🚀 ~ file: formRepository.js ~ line 47 ~ FindFormByOption ~ error",
      error.message
    );
  }
};

const FindFormsByCondition = async (condition) => {
  try {
    const forms = await ExaminationForm.find(condition);
    return forms;
  } catch (error) {
    console.log(
      "🚀 ~ file: formRepository.js ~ line 73 ~ FindFormsByOptionAndCondition ~ error",
      error
    );
  }
};

const UpdateForm = async (formId, body) => {
  try {
    const updatedForm = await ExaminationForm.findByIdAndUpdate(formId, body);
    return updatedForm;
  } catch (error) {
    console.log(
      "🚀 ~ file: formRepository.js ~ line 85 ~ UpdateForm ~ error",
      error
    );
  }
};

const DeleteForm = async (test) => {
  try {
    const deletedForm = await ExaminationForm.deleteOne(test);
    return deletedForm;
  } catch (error) {
    console.log(
      "🚀 ~ file: formRepository.js ~ line 99 ~ DeleteFormForTesting ~ error",
      error
    );
  }
};

module.exports = {
  CreateForm,
  FindAllForms,
  FindFormByOption,
  FindFormsByCondition,
  UpdateForm,
  DeleteForm,
};
