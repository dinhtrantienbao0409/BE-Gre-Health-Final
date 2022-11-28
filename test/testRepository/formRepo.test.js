const FormRepository = require("@repositories/formRepository");
const database = require("@databases/connect");

beforeAll(async () => {
  await database.connectDb();
});

afterAll(async () => {
  await database.disconnectDb();
});

test("get all forms", async () => {
  const forms = await FormRepository.FindAllForms();

  expect(forms.docs).toBeTruthy();
  expect(forms.docs.length).toBeGreaterThan(0);
});
