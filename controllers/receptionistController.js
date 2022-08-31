const ReceptionistRepository = require("../repositories/receptionistRepository");

const createReceptionist = async (req, res) => {
  try {
    const { name, gender, age, contact, email } = req.body;

    if (!name || !gender || !age || !contact || !email)
      return res.status(400).send("MISSING PARAMS!");

    const receptionist = await ReceptionistRepository.CreateReceptionist({
      name,
      gender,
      age,
      contact,
      email,
    });

    return res.status(200).send(receptionist);
  } catch (error) {
    console.log(
      "🚀 ~ file: receptionistController.js ~ line 20 ~ createReceptionist ~ error",
      error
    );
  }
};

const getAllReceptionists = async (req, res) => {
  try {
    const receptionists = await ReceptionistRepository.FindAllReceptionists();
    return res.status(200).send(receptionists);
  } catch (error) {
    console.log(
      "🚀 ~ file: receptionistController.js ~ line 32 ~ getAllReceptionists ~ error",
      error
    );
  }
};

const getReceptionistByOption = async (req, res) => {
  try {
    const { receptionistId } = req.params;

    if (!receptionistId) return res.status(400).send("NOTFOUND");

    const receptionist = await ReceptionistRepository.FindReceptionistByOption({
      _id: receptionistId,
    });

    if (!receptionist) return res.status(400).send("NOTFOUND");

    return res.status(200).send(receptionist);
  } catch (error) {
    console.log(
      "🚀 ~ file: receptionistController.js ~ line 51 ~ getReceptionistByOption ~ error",
      error
    );
  }
};

const deleteReceptionistById = async (req, res) => {
  try {
    const { receptionistId } = req.params;

    if (!receptionistId) return res.status(400).send("NOTFOUND");

    const receptionist = await ReceptionistRepository.DeleteReceptionist({
      _id: receptionistId,
    });

    return res.status(200).send(receptionist);
  } catch (error) {
    console.log(
      "🚀 ~ file: receptionistController.js ~ line 70 ~ deleteReceptionistById ~ error",
      error
    );
  }
};

const updateReceptionistById = async (req, res) => {
  const { receptionistId } = req.params;
  try {
    const receptionist = await ReceptionistRepository.UpdateReceptionist(
      receptionistId,
      req.body
    );

    return res.status(200).send(receptionist);
  } catch (error) {
    console.log(
      "🚀 ~ file: receptionistController.js ~ line 86 ~ updateReceptionistById ~ error",
      error
    );
  }
};
const getSearchedReceptionist = async (req, res) => {
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
    const searchedReceptionist =
      await ReceptionistRepository.FindAllReceptionists(conditions, options);
    return res.send(searchedReceptionist);
  } catch (error) {
    console.log(
      "🚀 ~ file: doctorController.js ~ line 114 ~ getSearchedDoctor ~ error",
      error
    );
  }
};

module.exports = {
  createReceptionist,
  getAllReceptionists,
  getReceptionistByOption,
  deleteReceptionistById,
  updateReceptionistById,
  getSearchedReceptionist,
};
