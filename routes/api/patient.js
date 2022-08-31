var express = require("express");
var router = express.Router();
const {
  createPatient,
  getAllPatients,
  getPatientByOption,
  deletePatientById,
  updatePatientById,
  getSearchedPatient,
} = require("../../controllers/patientController");

/**
 * @swagger
 * /api/patient:
 *   get:
 *     summary: Retrieve a list of patients.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.get("/", getAllPatients);

/**
 * @swagger
 * /api/patient/:patientId:
 *   get:
 *     summary: Retrieve a patient with entered ID.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.get("/:patientId", getPatientByOption);

/**
 * @swagger
 * /api/doctor/search/searchPatient:
 *   get:
 *     summary: Retrieve a doctor with entered ID.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.get("/search/searchPatient", getSearchedPatient);

/**
 * @swagger
 * /api/patient/create:
 *   post:
 *     summary: Retrieve a patient with entered params.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.post("/create", createPatient);

/**
 * @swagger
 * /api/patient/:patientId:
 *   delete:
 *     summary: Retrieve a patient deleted with entered ID.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.delete("/:patientId", deletePatientById);

/**
 * @swagger
 * /api/patient/:patientId:
 *   put:
 *     summary: Retrieve a patient updated with entered params.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.put("/:patientId", updatePatientById);

module.exports = router;
