const Doctor = require("../databases/models/DoctorModel");
const DoctorRepository = require("../repositories/doctorRepository");

const createDoctor = async (req, res) => {
  try {
    const { name, gender, age, contact, email } = req.body;

    if (!name || !gender || !age || !contact || !email)
      return res.status(400).send("MISSING PARAMS!");

    const doctor = await DoctorRepository.CreateDoctor({
      name,
      gender,
      age,
      contact,
      email,
    });

    return res.status(200).send(doctor);
  } catch (error) {
    console.log(
      "🚀 ~ file: doctorController.js ~ line 18 ~ createDoctor ~ error",
      error
    );
  }
};

const getAllDoctors = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;
    const options = {
      page,
      limit,
    };
    const doctors = await DoctorRepository.FindAllDoctors({}, options);

    return res.status(200).send(doctors);
  } catch (error) {
    console.log(
      "🚀 ~ file: doctorController.js ~ line 32 ~ getAllDoctors ~ error",
      error
    );
  }
};

const getDoctorByOption = async (req, res) => {
  try {
    const { doctorId } = req.params;

    if (!doctorId) return res.status(400).send("NOTFOUND");

    const doctor = await DoctorRepository.FindDoctorByOption({ _id: doctorId });

    if (!doctor) return res.status(400).send("NOTFOUND");

    return res.status(200).send(doctor);
  } catch (error) {
    console.log(
      "🚀 ~ file: doctorController.js ~ line 44 ~ getDoctorByOption ~ error",
      error
    );
  }
};

const deleteDoctorById = async (req, res) => {
  try {
    const { doctorId } = req.params;

    if (!doctorId) return res.status(400).send("NOTFOUND");

    const doctor = await DoctorRepository.DeleteDoctor({ _id: doctorId });

    return res.status(200).send(doctor);
  } catch (error) {
    console.log(
      "🚀 ~ file: doctorController.js ~ line 61 ~ deletedDoctorById ~ error",
      error
    );
  }
};

const updateDoctorById = async (req, res) => {
  const { doctorId } = req.params;
  try {
    const doctor = await DoctorRepository.UpdateDoctor(doctorId, req.body);

    return res.status(200).send(doctor);
  } catch (error) {
    console.log(
      "🚀 ~ file: doctorController.js ~ line 75 ~ updateDoctorById ~ error",
      error
    );
  }
};

const getSearchedDoctor = async (req, res) => {
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
    const searchedDoctor = await DoctorRepository.FindAllDoctors(
      conditions,
      options
    );
    return res.send(searchedDoctor);
  } catch (error) {
    console.log(
      "🚀 ~ file: doctorController.js ~ line 114 ~ getSearchedDoctor ~ error",
      error
    );
  }
};

module.exports = {
  createDoctor,
  getAllDoctors,
  getDoctorByOption,
  deleteDoctorById,
  updateDoctorById,
  getSearchedDoctor,
};
