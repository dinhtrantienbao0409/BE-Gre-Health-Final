const PatientRepository = require("../../repositories/patientRepository");
const database = require("../../databases/connect");

beforeAll(async () => {
  await database.connectDb();
});

afterAll(async () => {
  await database.disconnectDb();
});

const mockUser = {
  name: "test",
  gender: "test",
  age: "21",
  contact: "0000000000",
  email: "test@gmail.com",
};

test("get all patients", async () => {
  const response = await PatientRepository.FindAllPatients();
  expect(response.docs).toBeTruthy();
  expect(response.docs.length).toBeGreaterThan(0);
});

test("get patient by ID", async () => {
  const response = await PatientRepository.FindPatientByOption();
  expect(response).toBeTruthy();
  expect(response).not.toBeNull();
});

test("create patient", async () => {
  const response = await PatientRepository.CreatePatient({
    name: mockUser.name,
    gender: mockUser.gender,
    age: mockUser.age,
    contact: mockUser.contact,
    email: mockUser.email,
  });
  expect(response).toBeTruthy();
  expect(response).not.toBeNull();
});

test("delete patient", async () => {
  const response = await PatientRepository.DeletePatient();
  expect(response).toBeFalsy();
  // expect(response).not.toBeNull();
});

test("update patient", async () => {
  const patientId = "6305eead571be6346f485474";
  const body = {
    name: mockUser.name,
    gender: mockUser.gender,
    age: mockUser.age,
    contact: mockUser.contact,
    email: mockUser.email,
  };
  const response = await PatientRepository.UpdatePatient(patientId, body);
  // expect(response).toBeTruthy();
  expect(response).not.toBeNull();
});
