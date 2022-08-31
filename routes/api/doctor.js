var express = require("express");
var router = express.Router();
const {
  createDoctor,
  getAllDoctors,
  getDoctorByOption,
  deleteDoctorById,
  updateDoctorById,
  getSearchedDoctor,
} = require("../../controllers/doctorController");

/**
 * @swagger
 * /api/doctor:
 *   get:
 *     summary: Retrieve a list of doctors.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.get("/", getAllDoctors);

/**
 * @swagger
 * /api/doctor/:doctorId:
 *   get:
 *     summary: Retrieve a doctor with entered ID.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.get("/:doctorId", getDoctorByOption);

/**
 * @swagger
 * /api/doctor/search/searchDoctor:
 *   get:
 *     summary: Retrieve a doctor with entered ID.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.get("/search/searchDoctor", getSearchedDoctor);

/**
 * @swagger
 * /api/doctor:
 *   post:
 *     summary: Retrieve a doctor with entered params.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */

router.post("/create", createDoctor);

/**
 * @swagger
 * /api/doctor/:doctorId:
 *   delete:
 *     summary: Retrieve a doctor deleted with entered ID.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.delete("/:doctorId", deleteDoctorById);

/**
 * @swagger
 * /api/doctor/:doctorId:
 *   put:
 *     summary: Retrieve a doctor updated with entered params.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.put("/:doctorId", updateDoctorById);

module.exports = router;
