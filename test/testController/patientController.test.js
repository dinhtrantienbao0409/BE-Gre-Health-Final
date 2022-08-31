const request = require("supertest");
const app = require("../../app");
const database = require("@databases/connect");

beforeAll(async () => {
  await database.connectDb();
});

afterAll(async () => {
  await database.disconnectDb();
});

describe("GET /api/patient", () => {
  test("response with status code 200 and a list of patients", async () => {
    const response = await request(app)
      .get("/api/patient")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(response._body.docs.length).toBeGreaterThan(0);
  });
});

describe("POST /api/patient/create", () => {
  test("response with status code 200 and a created patient", async () => {
    const response = await request(app)
      .post("/api/patient/create")
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
      .post("/api/patient/create")
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

describe("GET /api/patient/:id", () => {
  test("response with status code 200 and 1 post by ID", async () => {
    const response = await request(app)
      .get("/api/patient/6305ee42e8724b5932dd6fac")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
  });

  test("response with status code 400 and message user not found", async () => {
    const response = await request(app)
      .get("/api/patient/6305edaa45f9d3a8f66e58a0")
      .set("Accept", "application/json");
    expect(response.status).toEqual(400);
    expect(response.text).toBe("NOTFOUND");
  });
});

describe("DELETE /api/patient/:id", () => {
  test("response with status code 200 and deleted user", async () => {
    const response = await request(app)
      .delete("/api/patient/6305edaa45f9d3a8f66e58d0")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(response._body).not.toBeNull();
  });
});

describe("PUT /api/patient/:id", () => {
  test("response with status code 200 and 1 updated user", async () => {
    const response = await request(app)
      .put("/api/patient/6305ee877be9ab9061be100e")
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
