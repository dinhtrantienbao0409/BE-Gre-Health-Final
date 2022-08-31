const Patient = require("../databases/models/PatientModel");

const CreatePatient = async ({ name, gender, age, contact, email }) => {
  try {
    const createdPatient = await Patient.create({
      name,
      gender,
      age,
      contact,
      email,
    });
    return createdPatient;
  } catch (error) {
    console.log(
      "🚀 ~ file: patientRepository.js ~ line 14 ~ CreatePatient ~ error",
      error
    );
  }
};

const FindAllPatients = async (conditions, options) => {
  try {
    const patients = await Patient.paginate(conditions, options);
    return patients;
  } catch (error) {
    console.log(
      "🚀 ~ file: patientRepository.js ~ line 26 ~ FindAllPatients ~ error",
      error
    );
  }
};

const FindPatientByOption = async (option) => {
  try {
    const patient = await Patient.findOne(option);
    return patient;
  } catch (error) {
    console.log(
      "🚀 ~ file: patientRepository.js ~ line 38 ~ FindPatientByOption ~ error",
      error
    );
  }
};

const DeletePatient = async (patientId) => {
  try {
    const deletedPatient = Patient.findByIdAndDelete(patientId);
    return deletedPatient;
  } catch (error) {
    console.log(
      "🚀 ~ file: patientRepository.js ~ line 50 ~ DeletePatient ~ error",
      error
    );
  }
};

const UpdatePatient = async (patientId, body) => {
  try {
    const updatedPatient = await Patient.findByIdAndUpdate(patientId, body);
    return updatedPatient;
  } catch (error) {
    console.log(
      "🚀 ~ file: patientRepository.js ~ line 62 ~ UpdateDoctor ~ error",
      error
    );
  }
};

module.exports = {
  CreatePatient,
  FindAllPatients,
  FindPatientByOption,
  DeletePatient,
  UpdatePatient,
};
