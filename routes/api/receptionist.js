var express = require("express");
var router = express.Router();
const {
  createReceptionist,
  getAllReceptionists,
  getReceptionistByOption,
  deleteReceptionistById,
  updateReceptionistById,
  getSearchedReceptionist,
} = require("../../controllers/receptionistController");

/**
 * @swagger
 * /api/receptionist:
 *   get:
 *     summary: Retrieve a list of receptionists.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.get("/", getAllReceptionists);

/**
 * @swagger
 * /api/receptionist/:receptionistId:
 *   get:
 *     summary: Retrieve a receptionist with entered ID.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.get("/:receptionistId", getReceptionistByOption);

/**
 * @swagger
 * /api/doctor/search/searchReceptionist:
 *   get:
 *     summary: Retrieve a list receptionist with entered search query .
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.get("/search/searchReceptionist", getSearchedReceptionist);

/**
 * @swagger
 * /api/receptionist/search/searchReceptionist:
 *   post:
 *     summary: Retrieve a receptionist with entered params.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.post("/create", createReceptionist);

/**
 * @swagger
 * /api/receptionist/:receptionistId:
 *   delete:
 *     summary: Retrieve a receptionist deleted with entered ID.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.delete("/:receptionistId", deleteReceptionistById);

/**
 * @swagger
 * /api/receptionist/:receptionistId:
 *   put:
 *     summary: Retrieve a receptionist updated with entered params.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.put("/:receptionistId", updateReceptionistById);

module.exports = router;
