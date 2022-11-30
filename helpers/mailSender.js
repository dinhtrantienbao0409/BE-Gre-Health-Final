const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (mailData) => {
  const { receiver, subject, text, message } = mailData;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.sendgrid.net",
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASSWORD,
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "greoralhealth@gmail.com", // sender address
      to: receiver, // list of receivers
      subject, // Subject line
      text, // plain text body
      html: `<b>${message}</b>`, // html body
    });
    console.log("🚀 ~ file: mailSender.js ~ line 24 ~ mailSender ~ info", info);
  } catch (error) {
    console.log("🚀 ~ file: mail.js ~ line 54 ~ sendMail ~ error", error);
  }
};

module.exports = {
  mailSender,
};
