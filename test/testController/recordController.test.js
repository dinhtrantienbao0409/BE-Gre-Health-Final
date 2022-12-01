const request = require("supertest");
const app = require("../../app");
const database = require("@databases/connect");
var mongoose = require("mongoose");

const mockRecord = {
  doctorName: "example",
  doctorEmail: "example",
  doctorAddress: "example",
  doctorContact: "example",
  username: "example",
  userGender: "example",
  userDateOfBirth: "example",
  userAddress: "example",
  userContact: "example",
  dentalSymtoms: "example",
  diagnosis: "example",
  treatmentPlan: "example",
  imageUrl: "https://images.tute.io/static/img/noimg-thumbnail.png",
  doctorId: "example",
  userId: "example",
};

beforeAll(async () => {
  await database.connectDb();
});

afterAll(async () => {
  await database.disconnectDb();
});

describe("POST /api/record/create", () => {
  test("response with status code 200 and deleted create", async () => {
    const response = await request(app)
      .delete("/api/record/deleteRecord")
      .send({
        userId: mockRecord.userId,
      })
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
  });

  test("response with status code 200 and created health record", async () => {
    const response = await request(app)
      .post("/api/record/create")
      .send(mockRecord)
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(response._body).not.toBeNull();
  });
  test("response with status code 400 with missing params", async () => {
    const response = await request(app)
      .post("/api/record/create")
      .send({ doctorName: "example" })
      .set("Accept", "application/json");
    expect(response.status).toEqual(400);
    expect(response._body).toBeUndefined();
    expect(response.text).toBe("MISSING PARAMS!");
  });
});

describe("GET /api/record", () => {
  test("response with status code 200 and a list of created records", async () => {
    const response = await request(app)
      .get(`/api/record?page=1&limit=5`)
      .set("Accept", "application/json");

    expect(response.status).toEqual(200);
    expect(response._body.length).toBeGreaterThan(0);
  });
});

describe("GET /api/record/findOne/:recordId", () => {
  test("response with status code 200 and 1 record by ID", async () => {
    const response = await request(app)
      .get("/api/record/findOne/63835f5cb751c4f56505e6a6")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(typeof response.body).toBe("object");
  });

  test("response with status code 400 and message record not found", async () => {
    const response = await request(app)
      .get("/api/record/findOne/6302f869a1a53acbdfea4abc")
      .set("Accept", "application/json");
    expect(response.status).toEqual(400);
    expect(response.text).toBe("NOTFOUND");
  });
});

describe("GET /api/record/findByDoctorId/:doctorId", () => {
  test("response with status code 200 and list of records by doctor ID", async () => {
    const response = await request(app)
      .get("/api/record/findByDoctorId/63463951381690f290e94292")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(response._body.length).toBeGreaterThan(0);
  });
});

describe("GET /api/record/search", () => {
  test("response with status code 200 and list of searched records with entered query", async () => {
    const response = await request(app)
      .get("/api/record/search?query=example")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(response._body.length).toBeGreaterThan(0);
  });
  test("response with status code 200 and all records without entered query", async () => {
    const response = await request(app)
      .get("/api/record/search?query=")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(response._body.length).toBeGreaterThan(0);
  });
});
