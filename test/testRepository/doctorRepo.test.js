const DoctorRepository = require("../../repositories/doctorRepository");
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

test("get all doctors", async () => {
  const response = await DoctorRepository.FindAllDoctors();
  expect(response.docs).toBeTruthy();
  expect(response.docs.length).toBeGreaterThan(0);
});

test("get doctor by ID", async () => {
  const response = await DoctorRepository.FindDoctorByOption();
  expect(response).toBeTruthy();
  expect(response).not.toBeNull();
});

test("create doctor", async () => {
  const response = await DoctorRepository.CreateDoctor({
    name: mockUser.name,
    gender: mockUser.gender,
    age: mockUser.age,
    contact: mockUser.contact,
    email: mockUser.email,
  });
  expect(response).toBeTruthy();
  expect(response).not.toBeNull();
});

test("delete doctor", async () => {
  const response = await DoctorRepository.DeleteDoctor();
  expect(response).toBeFalsy();
  // expect(response).not.toBeNull();
});

test("update doctor", async () => {
  const doctorId = "6302f869a1a53acbdfea4633";
  const body = {
    name: mockUser.name,
    gender: mockUser.gender,
    age: mockUser.age,
    contact: mockUser.contact,
    email: mockUser.email,
  };
  const response = await DoctorRepository.UpdateDoctor(doctorId, body);
  console.log(
    "🚀 ~ file: doctorRepo.test.js ~ line 38 ~ test ~ response",
    response
  );
  // expect(response).toBeTruthy();
  expect(response).not.toBeNull();
});
