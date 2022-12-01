const AuthRepository = require("@repositories/authRepository");
const database = require("@databases/connect");

beforeAll(async () => {
  await database.connectDb();
});

afterAll(async () => {
  await database.disconnectDb();
});

test("get all users", async () => {
  const users = await AuthRepository.FindUserByCondition();

  expect(users).toBeTruthy();
  expect(users.length).toBeGreaterThan(0);
});

test("get a user by ID", async () => {
  const user = await AuthRepository.FindUserByOption();

  expect(user).toBeTruthy();
});

test("get a user role", async () => {
  const user = await AuthRepository.FindUserByRole();

  expect(user).toBeTruthy();
  expect(user.length).toBeGreaterThan(0);
});
