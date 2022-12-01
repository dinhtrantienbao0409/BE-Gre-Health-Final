const Record = require("../databases/models/RecordModel");

const CreateRecord = async ({
  doctorName,
  doctorEmail,
  doctorAddress,
  doctorContact,
  username,
  userGender,
  userDateOfBirth,
  userAddress,
  userContact,
  dentalSymtoms,
  diagnosis,
  treatmentPlan,
  imageUrl,
  doctorId,
  userId,
}) => {
  try {
    const createdRecord = await Record.create({
      doctorName,
      doctorEmail,
      doctorAddress,
      doctorContact,
      username,
      userGender,
      userDateOfBirth,
      userAddress,
      userContact,
      dentalSymtoms,
      diagnosis,
      treatmentPlan,
      imageUrl,
      doctorId,
      userId,
    });
    return createdRecord;
  } catch (error) {
    console.log("🚀 ~ file: recordRepository.js ~ line 26 ~ error", error);
  }
};

const FindAllRecords = async (condition) => {
  try {
    const records = await Record.find(condition);
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

const FindRecordsByCondition = async (condition) => {
  try {
    const records = await Record.find(condition);
    return records;
  } catch (error) {
    console.log(
      "🚀 ~ file: recordRepository.js ~ line 47 ~ FindRecordByOption ~ error",
      error
    );
  }
};

const DeleteRecord = async (test) => {
  try {
    const deletedRecord = await Record.deleteOne(test);
    return deletedRecord;
  } catch (error) {
    console.log(
      "🚀 ~ file: recordRepository.js ~ line 83 ~ DeleteRecord ~ error",
      error
    );
  }
};

module.exports = {
  CreateRecord,
  FindAllRecords,
  FindRecordByOption,
  FindRecordsByCondition,
  DeleteRecord,
};
