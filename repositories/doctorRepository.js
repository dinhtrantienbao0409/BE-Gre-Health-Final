const Doctor = require("../databases/models/DoctorModel");

const CreateDoctor = async ({ name, gender, age, contact, email }) => {
  try {
    const createdDoctor = await Doctor.create({
      name,
      gender,
      age,
      contact,
      email,
    });
    return createdDoctor;
  } catch (error) {
    console.log(
      "🚀 ~ file: doctorRepository.js ~ line 14 ~ createDoctor ~ error",
      error
    );
  }
};

const FindAllDoctors = async (conditions, options) => {
  try {
    const doctors = await Doctor.paginate(conditions, options);
    return doctors;
  } catch (error) {
    console.log(
      "🚀 ~ file: doctorRepository.js ~ line 26 ~ FindAllDoctors ~ error",
      error
    );
  }
};

const FindDoctorByOption = async (option) => {
  try {
    const doctor = await Doctor.findOne(option);
    return doctor;
  } catch (error) {
    console.log(
      "🚀 ~ file: doctorRepository.js ~ line 38 ~ FindDoctorByOption ~ error",
      error
    );
  }
};

const DeleteDoctor = async (doctorId) => {
  try {
    const deletedDoctor = Doctor.findByIdAndDelete(doctorId);
    return deletedDoctor;
  } catch (error) {
    console.log(
      "🚀 ~ file: doctorRepository.js ~ line 50 ~ DeleteDoctor ~ error",
      error
    );
  }
};

const UpdateDoctor = async (doctorId, body) => {
  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(doctorId, body);
    return updatedDoctor;
  } catch (error) {
    console.log(
      "🚀 ~ file: doctorRepository.js ~ line 62 ~ UpdateDoctor ~ error",
      error
    );
  }
};

module.exports = {
  CreateDoctor,
  FindAllDoctors,
  FindDoctorByOption,
  DeleteDoctor,
  UpdateDoctor,
};
