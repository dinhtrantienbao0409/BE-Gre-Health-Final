const ExaminationForm = require("../databases/models/ExaminationFormModel");

const CreateForm = async ({
  username,
  userId,
  doctorId,
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
    console.log(
      "🚀 ~ file: formRepository.js ~ line 36 ~ createdForm",
      createdForm
    );
    return createdForm;
  } catch (error) {
    console.log("🚀 ~ file: formRepository.js ~ line 26 ~ error", error);
  }
};

const FindAllForms = async (conditions, options) => {
  try {
    const forms = await ExaminationForm.paginate(conditions, options);
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

const FindFormsByCondition = async (condition, option) => {
  try {
    const forms = await ExaminationForm.paginate(condition, option);
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

module.exports = {
  CreateForm,
  FindAllForms,
  FindFormByOption,
  FindFormsByCondition,
  UpdateForm,
};
