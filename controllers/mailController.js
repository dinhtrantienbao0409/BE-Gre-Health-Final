const { mailSender } = require("../helpers/mailSender");

const sendMail = async (req, res) => {
  const mailData = {
    receiver: req.body.receiver,
    subject: "Urgent! Message from SuperTeam",
    text: "You have a notification from Idea management system",
    message: "Somebody create idea. Let's take a look :))",
  };
  mailSender(mailData);
  return res.status(200).send("Success");
};

module.exports = { sendMail };
