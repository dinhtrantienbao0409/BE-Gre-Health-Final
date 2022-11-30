var express = require("express");
var router = express.Router();
const {
  register,
  login,
  deleteUserByEmail,
  findAllUser,
  findUserById,
  deleteUserById,
  updateUserById,
  findUserByDoctorRole,
} = require("../../controllers/authController");

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Retrieve a user with entered params and status 200.
 *     description: Retrieve a user from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.post("/register", register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Retrieve an object with token saved and status 200.
 *     description: Retrieve a token from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.post("/login", login);

/**
 * @swagger
 * /api/auth/deleteOne/:userId:
 *   delete:
 *     summary: Retrieve a deleted user and an object with deleteCount.
 *     description: Retrieve a token from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.delete("/deleteOne/:userId", deleteUserById);

/**
 * @swagger
 * /api/auth/:
 *   get:
 *     summary: Retrieve a list of users.
 *     description: Retrieve a token from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.get("/", findAllUser);

/**
 * @swagger
 * /api/auth/findOne/:userId:
 *   get:
 *     summary: Retrieve a user with enteredId.
 *     description: Retrieve a token from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.get("/findOne/:userId", findUserById);

/**
 * @swagger
 * /api/auth/:userId:
 *   put:
 *     summary: Retrieve an updated user with entered params.
 *     description: Retrieve a token from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.put("/:userId", updateUserById);

/**
 * @swagger
 * /api/auth/doctor:
 *   get:
 *     summary: Retrieve a list of doctors with doctor role.
 *     description: Retrieve a token from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.get("/doctor", findUserByDoctorRole);
router.delete("/deleteUser", deleteUserByEmail);

module.exports = router;
