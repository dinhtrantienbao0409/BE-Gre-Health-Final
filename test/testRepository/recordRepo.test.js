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

  expect(records).toBeTruthy();
  expect(records.length).toBeGreaterThan(0);
});

test("get a record by option", async () => {
  const record = await RecordRepository.FindRecordByOption();

  expect(record).toBeTruthy();
});

test("get list of records by option and condition", async () => {
  const records = await RecordRepository.FindRecordsByCondition();

  expect(records).toBeTruthy();
  expect(records.length).toBeGreaterThan(0);
});
