const Record = require("../databases/models/RecordModel");

const CreateRecord = async ({
  name,
  gender,
  dateOfBirth,
  address,
  age,
  contact,
  healthCondition,
  doctorSuggestion,
}) => {
  try {
    const createdRecord = await Record.create({
      name,
      gender,
      dateOfBirth,
      address,
      age,
      contact,
      healthCondition,
      doctorSuggestion,
    });
    return createdRecord;
  } catch (error) {
    console.log("🚀 ~ file: recordRepository.js ~ line 26 ~ error", error);
  }
};

const FindAllRecords = async () => {
  try {
    const records = await Record.find({});
    return records;
  } catch (error) {
    console.log(
      "🚀 ~ file: recordRepository.js ~ line 35 ~ FindAllRecords ~ error",
      error
    );
  }
};

const FindRecordByOption = async (option) => {
  try {
    const record = await Record.findOne(option);
    return record;
  } catch (error) {
    console.log(
      "🚀 ~ file: recordRepository.js ~ line 47 ~ FindRecordByOption ~ error",
      error
    );
  }
};

module.exports = { CreateRecord, FindAllRecords, FindRecordByOption };
