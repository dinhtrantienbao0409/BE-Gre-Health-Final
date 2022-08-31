const request = require("supertest");
const app = require("../../app");
const database = require("@databases/connect");

beforeAll(async () => {
  await database.connectDb();
});

afterAll(async () => {
  await database.disconnectDb();
});

describe("GET /api/doctor", () => {
  test("response with status code 200 and a list of doctors", async () => {
    const response = await request(app)
      .get("/api/doctor")
      .set("Accept", "application/json");

    expect(response.status).toEqual(200);
    expect(response._body.docs.length).toBeGreaterThan(0);
  });
});

describe("POST /api/doctor/create", () => {
  test("response with status code 200 and a created doctors", async () => {
    const response = await request(app)
      .post("/api/doctor/create")
      .send({
        name: "Hien My",
        gender: "Male",
        age: "25",
        contact: "012301230123",
        email: "hienmy@gmail.com",
      })
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(response._body).not.toBeNull();
  });

  test("response with status code 400 and message missing params", async () => {
    const response = await request(app)
      .post("/api/doctor/create")
      .send({
        name: "",
        gender: "Male",
        age: "25",
        contact: "012301230123",
        email: "hienmy@gmail.com",
      })
      .set("Accept", "application/json");

    expect(response.status).toEqual(400);
    expect(response._body).toBeUndefined();
    expect(response.text).toBe("MISSING PARAMS!");
  });
});

describe("GET /api/doctor/:id", () => {
  test("response with status code 200 and 1 post by ID", async () => {
    const response = await request(app)
      .get("/api/doctor/6302f869a1a53acbdfea4633")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
  });

  test("response with status code 400 and message user not found", async () => {
    const response = await request(app)
      .get("/api/doctor/6302f869a1a53acbdfea4abc")
      .set("Accept", "application/json");
    expect(response.status).toEqual(400);
    expect(response.text).toBe("NOTFOUND");
  });
});

describe("DELETE /api/doctor/:id", () => {
  test("response with status code 200 and deleted user", async () => {
    const response = await request(app)
      .delete("/api/doctor/6305d6c22a4d6f7d50a34e09")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(response._body).not.toBeNull();
  });
});

describe("PUT /api/doctor/:id", () => {
  test("response with status code 200 and 1 updated user", async () => {
    const response = await request(app)
      .put("/api/doctor/6302f869a1a53acbdfea4633")
      .send({
        name: "Hien My dep trai",
        gender: "Male",
        age: "25",
        contact: "012301230123",
        email: "hienmydeptrai@gmail.com",
      })
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(response._body).not.toBeNull();
  });
});
