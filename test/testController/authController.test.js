const request = require("supertest");
const app = require("../../app");
const database = require("@databases/connect");
var mongoose = require("mongoose");

const mockUserRegister = {
  email: "tienbaotest@gmail.com",
  password: "123",
  role: "admin",
};

const mockUserLogin = {
  email: "tienbaologin@gmail.com",
  password: "123",
};

beforeAll(async () => {
  await database.connectDb();
});

afterAll(async () => {
  await database.disconnectDb();
});

describe("POST /api/auth/register", () => {
  test("response with status code 200 and deleted user", async () => {
    const response = await request(app)
      .delete("/api/auth/deleteUser")
      .send({
        email: mockUserRegister.email,
      })
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
  });

  test("response with status code 200 and created user", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send(mockUserRegister)
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(response._body).not.toBeNull();
  });
});

describe("POST /api/auth/login", () => {
  test("response with status code 200 and token", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send(mockUserLogin)
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(typeof response.body).toBe("string");
    console.log(
      "🚀 ~ file: authController.test.js ~ line 54 ~ test ~ response.body",
      response.body
    );
  });

  test("response with status code 400 and message missing params", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send({
        email: mockUserLogin.email,
      })
      .set("Accept", "application/json");
    expect(response.status).toEqual(400);
    expect(response.text).toBe("MISSING_PARAMS");
  });

  test("response with status code 400 and message user notfound", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send({
        email: "tienbaologin1@gmail.com",
        password: "123",
      })
      .set("Accept", "application/json");
    expect(response.status).toEqual(400);
    expect(response.text).toBe("USER_NOTFOUND");
  });

  test("response with status code 400 and message invalid password", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send({
        email: mockUserLogin.email,
        password: "123456",
      })
      .set("Accept", "application/json");
    expect(response.status).toEqual(400);
    expect(response.text).toBe("INVALID_PASSWORD");
  });
});
