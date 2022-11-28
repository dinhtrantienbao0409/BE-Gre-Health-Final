var express = require("express");
var router = express.Router();
const {
  createRecord,
  getAllRecords,
  getRecordByRecordId,
  getRecordByDoctorId,
  getRecordByUserId,
  deletedRecordForTesting,
} = require("../../controllers/recordController");

/**
 * @swagger
 * /api/record:
 *   get:
 *     summary: Retrieve a list of records.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 */
router.get("/", getAllRecords);

/**
 * @swagger
 * /api/record/:recordId:
 *   get:
 *     summary: Retrieve a record with entered ID.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.get("/findOne/:recordId", getRecordByRecordId);

/**
 * @swagger
 * /api/record/create:
 *   post:
 *     summary: Retrieve a created record.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.post("/create", createRecord);
router.get("/findByDoctorId/:doctorId", getRecordByDoctorId);
router.get("/findByUserId/:userId", getRecordByUserId);
router.delete("/deleteRecord", deletedRecordForTesting);

module.exports = router;
