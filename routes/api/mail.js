var express = require("express");
var router = express.Router();
const { sendMail } = require("../../controllers/mailController");

/**
 * @swagger
 * /api/mail/:
 *   post:
 *     summary: Retrieve an email with entered receiver and status 200.
 *     description: Retrieve a token from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:

 */
router.post("/", sendMail);

module.exports = router;
