var express = require("express");
var router = express.Router();

const {
  createForm,
  getAllForms,
  getFormByFormId,
  getFormsWithoutDoctorId,
  updateFormById,
  getFormsByDoctorId,
} = require("../../controllers/FormController");

router.get("/", getAllForms);
router.get("/findOne/:formId", getFormByFormId);
router.get("/withoutDoctorId", getFormsWithoutDoctorId);
router.get("/byDoctorId/:doctorId", getFormsByDoctorId);
router.post("/create", createForm);
router.put("/:formId", updateFormById);

module.exports = router;
