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
      doctorId,
      userId,
    });
    return createdRecord;
  } catch (error) {
    console.log("🚀 ~ file: recordRepository.js ~ line 26 ~ error", error);
  }
};

const FindAllRecords = async (conditions, options) => {
  try {
    const records = await Record.paginate(conditions, options);
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

const FindRecordsByCondition = async (conditions, options) => {
  try {
    const records = await Record.paginate(conditions, options);
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
