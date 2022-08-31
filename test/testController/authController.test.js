const request = require("supertest");
const app = require("../../app");
const database = require("@databases/connect");
var mongoose = require("mongoose");

const mockUser = {
  email: "tienbaotest@gmail.com",
  password: "123",
  role: "admin",
};

beforeAll(async () => {
  await database.connectDb();
});

afterAll(async () => {
  await database.disconnectDb();
});

describe("POST /api/auth/register", () => {
  beforeEach(() => {
    console.log("Clear database");
  });
  test("response with status code 200 and created user", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send({
        email: mockUser.email,
        password: mockUser.password,
        role: mockUser.role,
      })
      .set("Accept", "application/json");
    // console.log(
    //   "🚀 ~ file: authController.test.js ~ line 16 ~ test ~ response",
    //   response
    // );
    expect(response.status).toEqual(200);
    expect(response._body).not.toBeNull();
  });
});
