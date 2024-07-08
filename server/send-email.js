/**
 Function to send an email (anticipated in response to a FETCH request)

 Input parameter should be an object with three key/value pairs (from form on UI)
 - name: the name of the sender (will be in the "reply-to" field)
 - address: the email of the sender (will be in the "reply-to" field)
 - message: the body of the email, currently just in text format

 Function returns the string returned by SMTP transport, including the last
 SMTP response from the server. For other possible responses, see the docs at
 https://nodemailer.com/usage/
 */

const nodemailer = require("nodemailer");
require("dotenv").config();

// Create a transporter object for gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PWD,
  },
});

const Mail = async (mailData) => {
  // Email options (from request body)
  const mailOptions = {
    to: process.env.EMAIL,
    from: {
      name: mailData.name,
      address: mailData.address,
    },
    replyTo: `${mailData.name} <${mailData.address}>`,
    subject: "message from dev portfolio visitor",
    text: mailData.message,
  };

  // Send email
  try {
    const info = await transporter.sendMail(mailOptions);
    return info.response;
  } catch (error) {
    return error;
  }
};

module.exports = Mail;
