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

test("get a form", async () => {
  const form = await FormRepository.FindFormByOption();

  expect(form).toBeTruthy();
});

test("get all forms without doctor ID", async () => {
  const forms = await FormRepository.FindFormsByCondition();

  expect(forms.docs).toBeTruthy();
  expect(forms.docs.length).toBeGreaterThan(0);
});
