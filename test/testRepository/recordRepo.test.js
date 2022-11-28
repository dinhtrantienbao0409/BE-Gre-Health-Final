const RecordRepository = require("@repositories/recordRepository");
const database = require("@databases/connect");

beforeAll(async () => {
  await database.connectDb();
});

afterAll(async () => {
  await database.disconnectDb();
});

test("get all records", async () => {
  const records = await RecordRepository.FindAllRecords();

  expect(records.docs).toBeTruthy();
  expect(records.docs.length).toBeGreaterThan(0);
});

test("get a record by option", async () => {
  const record = await RecordRepository.FindRecordByOption();

  expect(record).toBeTruthy();
});

test("get list of records by option and condition", async () => {
  const records = await RecordRepository.FindRecordsByCondition();

  expect(records.docs).toBeTruthy();
  expect(records.docs.length).toBeGreaterThan(0);
});

// test("create record", async () => {
//   const record = await RecordRepository.CreateRecord();
//   console.log(
//     "🚀 ~ file: recordRepo.test.js ~ line 34 ~ test ~ record",
//     record
//   );
//   expect(record).not.toBeNull();
//   // expect(record).toBeTruthy();
// });

// test("delete records by option", async () => {
//   const record = await RecordRepository.DeleteRecord();
//   console.log(
//     "🚀 ~ file: recordRepo.test.js ~ line 41 ~ test ~ record",
//     record
//   );

//   expect(record).toBeTruthy();
//   // expect(record.deletedCount).tobe(1);
// });
