const request = require("supertest");
const app = require("../../app");
const database = require("@databases/connect");
var mongoose = require("mongoose");

const mockForm = {
  username: "example",
  userId: "example",
  doctorId: "",
  gender: "example",
  address: "example",
  dateOfBirth: "example",
  contact: "example",
  email: "example",
  reason: "example",
  examinationHistory: "example",
  dentalProblem: "example",
  diseaseSymptoms: "example",
  dateRequest: "example",
};

beforeAll(async () => {
  await database.connectDb();
});

afterAll(async () => {
  await database.disconnectDb();
});

describe("POST /api/form/create", () => {
  test("response with status code 200 and deleted form", async () => {
    const response = await request(app)
      .delete("/api/form/deleteForm")
      .send({
        userId: mockForm.userId,
      })
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
  });

  test("response with status code 200 and created examination form", async () => {
    const response = await request(app)
      .post("/api/form/create")
      .send(mockForm)
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(response._body).not.toBeNull();
  });
  test("response with status code 400 with missing params", async () => {
    const response = await request(app)
      .post("/api/form/create")
      .send({ username: "example" })
      .set("Accept", "application/json");
    expect(response.status).toEqual(400);
    expect(response._body).toBeUndefined();
    expect(response.text).toBe("MISSING PARAMS!");
  });
});

describe("GET /api/form", () => {
  test("response with status code 200 and a list of created forms", async () => {
    const response = await request(app)
      .get(`/api/form?page=1&limit=5`)
      .set("Accept", "application/json");

    expect(response.status).toEqual(200);
    expect(response._body.docs.length).toBeGreaterThan(0);
  });
});

describe("GET /api/form/findOne/:formId", () => {
  test("response with status code 200 and 1 form by ID", async () => {
    const response = await request(app)
      .get("/api/form/findOne/637fcc93e242ba8dfe8138b1")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(typeof response.body).toBe("object");
  });

  test("response with status code 400 and message form not found", async () => {
    const response = await request(app)
      .get("/api/form/findOne/6302f869a1a53acbdfea4abc")
      .set("Accept", "application/json");
    expect(response.status).toEqual(400);
    expect(response.text).toBe("NOTFOUND");
  });
});

describe("GET /api/form/withoutDoctorId", () => {
  test("response with status code 200 and 1 form without doctor ID", async () => {
    const response = await request(app)
      .get("/api/form/withoutDoctorId")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(response._body.docs.length).toBeGreaterThan(0);
  });
});

describe("GET /api/form/byDoctorId/:doctorId", () => {
  test("response with status code 200 and list of forms by doctor ID", async () => {
    const response = await request(app)
      .get("/api/form/byDoctorId/638099268c969c01e3e4debf")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    expect(response._body.docs.length).toBeGreaterThan(0);
  });
});

// describe("PUT /api/form/:formId", () => {
//   test("response with status code 200 and 1 updated form", async () => {
//     const response = await request(app)
//       .put("/api/form/637fcc93e242ba8dfe8138b1")
//       .send({
//         username: "example",
//         gender: "example",
//         address: "example",
//         dateOfBirth: "example",
//         contact: "example",
//         email: "example",
//         reason: "example",
//         examinationHistory: "example",
//         dentalProblem: "example",
//         diseaseSymptoms: "example",
//         dateRequest: "example",
//       })
//       .set("Accept", "application/json");
//     expect(response.status).toEqual(200);
//     expect(typeof response.body).toBe("object");
//   });

//   test("response with status code 400 and not found form", async () => {
//     const response = await request(app)
//       .put("/api/form/637fcc93e242ba8dfe8138444")
//       .send({ mockForm })
//       .set("Accept", "application/json");
//     expect(response.status).toEqual(400);
//     expect(response.text).toBe("NOTFOUND");
//   });
// });
