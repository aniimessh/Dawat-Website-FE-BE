const nodemailer = require("nodemailer");
require("dotenv").config();

const mailSender = async (email, title, body) => {
  try {
    transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: "8000",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: "Dawat - A Family Restaurant",
      to: `${email}`,
      subject: `${title}`,
      html: `${body}`,
    });

    console.log(info);
    return info;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = mailSender;
