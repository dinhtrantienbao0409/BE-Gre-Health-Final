const ReceptionistRepository = require("../../repositories/receptionistRepository");
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

test("get all receptionists", async () => {
  const response = await ReceptionistRepository.FindAllReceptionists();
  expect(response.docs).toBeTruthy();
  expect(response.docs.length).toBeGreaterThan(0);
});

test("get receptionist by ID", async () => {
  const response = await ReceptionistRepository.FindReceptionistByOption();
  expect(response).toBeTruthy();
  expect(response).not.toBeNull();
});

test("create receptionist", async () => {
  const response = await ReceptionistRepository.CreateReceptionist({
    name: mockUser.name,
    gender: mockUser.gender,
    age: mockUser.age,
    contact: mockUser.contact,
    email: mockUser.email,
  });
  expect(response).toBeTruthy();
  expect(response).not.toBeNull();
});

test("delete receptionist", async () => {
  const response = await ReceptionistRepository.DeleteReceptionist();
  expect(response).toBeFalsy();
  // expect(response).not.toBeNull();
});

test("update receptionist", async () => {
  const receptionistId = "630c6d21fadb58f6c955e6ad";
  const body = {
    name: mockUser.name,
    gender: mockUser.gender,
    age: mockUser.age,
    contact: mockUser.contact,
    email: mockUser.email,
  };
  const response = await ReceptionistRepository.UpdateReceptionist(
    receptionistId,
    body
  );
  // expect(response).toBeTruthy();
  expect(response).not.toBeNull();
});
