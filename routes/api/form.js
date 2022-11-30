var express = require("express");
var router = express.Router();

const {
  createForm,
  getAllForms,
  getFormByFormId,
  getFormsWithoutDoctorId,
  updateFormById,
  getFormsByDoctorId,
  deletedFormForTesting,
  searchForm,
} = require("../../controllers/FormController");

/**
 * @swagger
 * /api/form/:
 *   get:
 *     summary: Retrieve a list of forms.
 *     description: Retrieve a token from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.get("/", getAllForms);

/**
 * @swagger
 * /api/form/findOne/:formId:
 *   get:
 *     summary: Retrieve a form with entered Id.
 *     description: Retrieve a token from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.get("/findOne/:formId", getFormByFormId);

/**
 * @swagger
 * /api/form/withoutDoctorId:
 *   get:
 *     summary: Retrieve a list of doctors without doctor Id.
 *     description: Retrieve a token from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.get("/withoutDoctorId", getFormsWithoutDoctorId);

/**
 * @swagger
 * /api/form/byDoctorId/:doctorId:
 *   get:
 *     summary: Retrieve a user by doctorId.
 *     description: Retrieve a token from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.get("/byDoctorId/:doctorId", getFormsByDoctorId);

/**
 * @swagger
 * /api/form/create:
 *   post:
 *     summary: Retrieve a form with entered params and status 200.
 *     description: Retrieve a user from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.post("/create", createForm);

/**
 * @swagger
 * /api/form/:formId:
 *   put:
 *     summary: Retrieve an updated form with entered params.
 *     description: Retrieve a token from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.put("/:formId", updateFormById);

/**
 * @swagger
 * /api/form/search:
 *   get:
 *     summary: Retrieve an list of searched form with entered query.
 *     description: Retrieve a token from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.get("/search", searchForm);
router.delete("/deleteForm", deletedFormForTesting);

module.exports = router;
