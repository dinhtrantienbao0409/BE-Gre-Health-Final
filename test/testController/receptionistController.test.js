const request = require("supertest");
const app = require("../../app");
const database = require("@databases/connect");

beforeAll(async () => {
  await database.connectDb();
});

afterAll(async () => {
  await database.disconnectDb();
});

describe("GET /api/receptionist", () => {
  test("response with status code 200 and a list of receptionists", async () => {
    const response = await request(app)
      .get("/api/receptionist")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(response._body.docs.length).toBeGreaterThan(0);
  });
});

describe("POST /api/receptionist/create", () => {
  test("response with status code 200 and a created receptionist", async () => {
    const response = await request(app)
      .post("/api/receptionist/create")
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
      .post("/api/receptionist/create")
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

describe("GET /api/receptionist/:id", () => {
  test("response with status code 200 and 1 receptionist by ID", async () => {
    const response = await request(app)
      .get("/api/receptionist/630c6d21fadb58f6c955e6ad")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
  });

  test("response with status code 400 and message user not found", async () => {
    const response = await request(app)
      .get("/api/receptionist/6305edaa45f9d3a8f66e58a0")
      .set("Accept", "application/json");
    expect(response.status).toEqual(400);
    expect(response.text).toBe("NOTFOUND");
  });
});

describe("DELETE /api/receptionist/:id", () => {
  test("response with status code 200 and deleted user", async () => {
    const response = await request(app)
      .delete("/api/receptionist/63030af07f712ba028606e56")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(response._body).not.toBeNull();
  });
});

describe("PUT /api/receptionist/:id", () => {
  test("response with status code 200 and 1 updated user", async () => {
    const response = await request(app)
      .put("/api/receptionist/630c6d21fadb58f6c955e6ad")
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
