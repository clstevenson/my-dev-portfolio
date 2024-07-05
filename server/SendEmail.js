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

// Email options
const mailOptions = {
  to: "cstevens@richmond.edu", // List of recipients
  replyTo: "cstevens@richmond.edu",
  subject: "Node.js Email Test", // Subject line
  text: "This is another test", // Plain text body
  html: "<b>This is an HTML test.</b>", // HTML body
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(`Error: ${error}`);
  }
  console.log(`Message Sent: ${info.response}`);
});
