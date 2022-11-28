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
 *     summary: Retrieve a user with entered params.
 *     description: Retrieve a user from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.post("/register", register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Retrieve token saved.
 *     description: Retrieve a token from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.post("/login", login);
router.delete("/deleteOne/:userId", deleteUserById);
router.get("/", findAllUser);
router.get("/findOne/:userId", findUserById);
router.put("/:userId", updateUserById);
router.get("/doctor", findUserByDoctorRole);
router.delete("/deleteUser", deleteUserByEmail);

module.exports = router;
