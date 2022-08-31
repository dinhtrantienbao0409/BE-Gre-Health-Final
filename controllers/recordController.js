const RecordRepository = require("../repositories/recordRepository");

const createRecord = async (req, res) => {
  try {
    const {
      name,
      gender,
      dateOfBirth,
      address,
      age,
      contact,
      healthCondition,
      doctorSuggestion,
    } = req.body;

    if (
      !name ||
      !gender ||
      !dateOfBirth ||
      !address ||
      !age ||
      !contact ||
      !healthCondition ||
      !doctorSuggestion
    )
      return res.status(400).send("MISSING PARAMS!");

    const record = await RecordRepository.CreateRecord({
      name,
      gender,
      dateOfBirth,
      address,
      age,
      contact,
      healthCondition,
      doctorSuggestion,
    });

    return res.status(200).send(record);
  } catch (error) {
    console.log(
      "🚀 ~ file: recordController.js ~ line 22 ~ createRecord ~ error",
      error
    );
  }
};

const getAllRecords = async (req, res) => {
  try {
    const records = await RecordRepository.FindAllRecords();
    return res.status(200).send(records);
  } catch (error) {
    console.log(
      "🚀 ~ file: recordController.js ~ line 53 ~ getAllRecords ~ error",
      error
    );
  }
};

const getRecordByOption = async (req, res) => {
  try {
    const { recordId } = req.params;

    if (!recordId) return res.status(400).send("NOTFOUND");

    const record = await RecordRepository.FindRecordByOption({ _id: recordId });

    if (!record) return res.status(400).send("NOTFOUND");

    return res.status(200).send(record);
  } catch (error) {
    console.log(
      "🚀 ~ file: recordController.js ~ line 65 ~ getRecordByOption ~ error",
      error
    );
  }
};

module.exports = { createRecord, getAllRecords, getRecordByOption };
