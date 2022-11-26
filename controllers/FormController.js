const FormRepository = require("../repositories/formRepository");

const createForm = async (req, res) => {
  try {
    const {
      username,
      userId,
      gender,
      dateOfBirth,
      address,
      contact,
      email,
      reason,
      examinationHistory,
      dentalProblem,
      diseaseSymptoms,
      dateRequest,
    } = req.body;
    console.log(
      "🚀 ~ file: FormController.js ~ line 19 ~ createForm ~ dateOfBirth",
      dateOfBirth
    );

    if (
      !username ||
      !userId ||
      !gender ||
      !dateOfBirth ||
      !address ||
      !contact ||
      !email ||
      !reason ||
      !examinationHistory ||
      !diseaseSymptoms ||
      !dateRequest
    )
      return res.status(400).send("MISSING PARAMS!");

    const form = await FormRepository.CreateForm({
      username,
      userId,
      doctorId: "",
      gender,
      dateOfBirth,
      address,
      contact,
      email,
      reason,
      examinationHistory,
      dentalProblem,
      diseaseSymptoms,
      dateRequest,
    });

    return res.status(200).send(form);
  } catch (error) {
    console.log(
      "🚀 ~ file: FormController.js ~ line 41 ~ createForm ~ error",
      error
    );
  }
};

const getAllForms = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;
    const options = {
      page,
      limit,
    };
    const forms = await FormRepository.FindAllForms({}, options);

    return res.status(200).send(forms);
  } catch (error) {
    console.log(
      "🚀 ~ file: FormController.js ~ line 59 ~ getAllForm ~ error",
      error
    );
  }
};

const getFormByFormId = async (req, res) => {
  try {
    const { formId } = req.params;

    if (!formId) return res.status(400).send("NOTFOUND");

    const form = await FormRepository.FindFormByOption({ _id: formId });

    if (!form) return res.status(400).send("NOTFOUND");

    return res.status(200).send(form);
  } catch (error) {
    console.log(
      "🚀 ~ file: FormController.js ~ line 78 ~ getFormByOption ~ error",
      error
    );
  }
};
const getFormsWithoutDoctorId = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;
    const options = {
      page,
      limit,
    };
    const doctorId = "";
    const forms = await FormRepository.FindFormsByCondition(
      {
        doctorId: doctorId,
      },
      options
    );

    return res.status(200).send(forms);
  } catch (error) {
    console.log(
      "🚀 ~ file: FormController.js ~ line 113 ~ getFormsByDoctorId ~ error",
      error
    );
  }
};

const getFormsByDoctorId = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;
    const options = {
      page,
      limit,
    };
    const { doctorId } = req.params;
    const forms = await FormRepository.FindFormsByCondition(
      {
        doctorId: doctorId,
      },
      options
    );

    return res.status(200).send(forms);
  } catch (error) {
    console.log(
      "🚀 ~ file: FormController.js ~ line 146 ~ getFormsByDoctorId ~ error",
      error
    );
  }
};

const updateFormById = async (req, res) => {
  console.log(
    "🚀 ~ file: FormController.js ~ line 129 ~ updateFormById ~ req",
    req.body.doctorId
  );
  const { formId } = req.params;
  try {
    const form = await FormRepository.UpdateForm(formId, {
      doctorId: req.body.doctorId,
    });

    return res.status(200).send(form);
  } catch (error) {
    console.log(
      "🚀 ~ file: FormController.js ~ line 135 ~ updateFormById ~ error",
      error
    );
  }
};

module.exports = {
  createForm,
  getAllForms,
  getFormByFormId,
  getFormsWithoutDoctorId,
  getFormsByDoctorId,
  updateFormById,
};
