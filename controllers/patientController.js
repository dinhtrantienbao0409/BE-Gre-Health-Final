const PatientRepository = require("../repositories/patientRepository");

const createPatient = async (req, res) => {
  try {
    const { name, gender, age, contact, email } = req.body;

    if (!name || !gender || !age || !contact || !email)
      return res.status(400).send("MISSING PARAMS!");

    const patient = await PatientRepository.CreatePatient({
      name,
      gender,
      age,
      contact,
      email,
    });

    return res.status(200).send(patient);
  } catch (error) {
    console.log(
      "🚀 ~ file: patientController.js ~ line 20 ~ createPatient ~ error",
      error
    );
  }
};

const getAllPatients = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;
    const options = {
      page,
      limit,
    };
    const patients = await PatientRepository.FindAllPatients({}, options);
    return res.status(200).send(patients);
  } catch (error) {
    console.log(
      "🚀 ~ file: patientController.js ~ line 32 ~ getAllPatients ~ error",
      error
    );
  }
};

const getPatientByOption = async (req, res) => {
  try {
    const { patientId } = req.params;

    if (!patientId) return res.status(400).send("NOTFOUND");

    const patient = await PatientRepository.FindPatientByOption({
      _id: patientId,
    });

    if (!patient) return res.status(400).send("NOTFOUND");

    return res.status(200).send(patient);
  } catch (error) {
    console.log(
      "🚀 ~ file: patientController.js ~ line 44 ~ getPatientByOption ~ error",
      error
    );
  }
};

const deletePatientById = async (req, res) => {
  try {
    const { patientId } = req.params;

    if (!patientId) return res.status(400).send("NOTFOUND");

    const patient = await PatientRepository.DeletePatient({ _id: patientId });

    return res.status(200).send(patient);
  } catch (error) {
    console.log(
      "🚀 ~ file: patientController.js ~ line 63 ~ deletedPatientById ~ error",
      error
    );
  }
};

const updatePatientById = async (req, res) => {
  const { patientId } = req.params;
  try {
    const patient = await PatientRepository.UpdatePatient(patientId, req.body);

    return res.status(200).send(patient);
  } catch (error) {
    console.log(
      "🚀 ~ file: patientController.js ~ line 77 ~ updatePatientById ~ error",
      error
    );
  }
};

const getSearchedPatient = async (req, res) => {
  try {
    const { query, page = 1, limit = 5 } = req.query;
    const options = {
      page,
      limit,
    };

    const conditions = {
      $or: [
        { name: { $regex: String(query) }, $options: "i" },
        { email: { $regex: String(query) }, $options: "i" },
      ],
    };
    const searchedPatient = await PatientRepository.FindAllPatients(
      conditions,
      options
    );
    return res.send(searchedPatient);
  } catch (error) {
    console.log(
      "🚀 ~ file: doctorController.js ~ line 114 ~ getSearchedDoctor ~ error",
      error
    );
  }
};

module.exports = {
  createPatient,
  getAllPatients,
  getPatientByOption,
  deletePatientById,
  updatePatientById,
  getSearchedPatient,
};
