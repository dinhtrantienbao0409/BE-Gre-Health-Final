const request = require("supertest");
const app = require("../../app");
const database = require("@databases/connect");

const mockUser = {
  email: "exampleRegister@gmail.com",
  password: "example",
  name: "example",
  address: "example",
  contact: "example",
  dateOfBirth: "example",
  gender: "example",
  jobTitle: "example",
  role: "admin",
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
        email: mockUser.email,
      })
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
  });
  test("response with status code 200 and created user", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send(mockUser)
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(response._body).not.toBeNull();
  });
  test("response with status code 400 and message existed field", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send(mockUser)
      .set("Accept", "application/json");
    expect(response.status).toEqual(400);
    expect(response.text).toBe("EXISTED_FIELD");
  });
});

describe("POST /api/auth/login", () => {
  test("response with status code 200 and token", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send({ email: mockUser.email, password: mockUser.password })
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(typeof response.body).toBe("object");
  });

  test("response with status code 400 and message missing params", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send({
        email: mockUser.email,
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
        email: mockUser.email,
        password: "123456",
      })
      .set("Accept", "application/json");
    expect(response.status).toEqual(400);
    expect(response.text).toBe("INVALID_PASSWORD");
  });
});

describe("GET /api/auth/doctor", () => {
  test("response with status code 200 and a list of created doctors", async () => {
    const response = await request(app)
      .get(`/api/auth/doctor`)
      .set("Accept", "application/json");

    expect(response.status).toEqual(200);
    expect(response._body.length).toBeGreaterThan(0);
  });
});

describe("GET /api/auth", () => {
  test("response with status code 200 and a list of created users", async () => {
    const response = await request(app)
      .get(`/api/auth?page=1&limit=5`)
      .set("Accept", "application/json");

    expect(response.status).toEqual(200);
    expect(response._body.docs.length).toBeGreaterThan(0);
  });
});

describe("GET /api/auth/findOne/:userId", () => {
  test("response with status code 200 and 1 user by ID", async () => {
    const response = await request(app)
      .get("/api/auth/findOne/633b311a782fa1f1941dff69")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(typeof response.body).toBe("object");
  });

  test("response with status code 400 and message user not found", async () => {
    const response = await request(app)
      .get("/api/auth/findOne/6302f869a1a53acbdfea4abc")
      .set("Accept", "application/json");
    expect(response.status).toEqual(400);
    expect(response.text).toBe("NOTFOUND");
  });
});

// describe("PUT /api/auth/:userId", () => {
//   test("response with status code 200 and 1 updated user", async () => {
//     const response = await request(app)
//       .put("/api/auth/633b311a782fa1f1941dff69")
//       .send({
//         email: "example1",
//         password: "example",
//         name: "example",
//         address: "example",
//         contact: "example",
//         dateOfBirth: "example",
//         gender: "example",
//         jobTitle: "example",
//         role: "admin",
//       })
//       .set("Accept", "application/json");
//     expect(response.status).toEqual(200);
//     expect(typeof response.body).toBe("object");
//   });

//   test("response with status code 400 and not found user", async () => {
//     const response = await request(app)
//       .put("/api/auth/433b311a712fa1f1941dgf69")
//       .send({ mockUser })
//       .set("Accept", "application/json");
//     expect(response.status).toEqual(400);
//     expect(response.text).toBe("NOTFOUND");
//   });
// });
