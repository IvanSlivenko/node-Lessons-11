const nodemailer = require("nodemailer");
require("dotenv").config();

const { UKR_NET_PASSWORD, UKR_NET_EMAIL, RECIPIENT_EMAIL } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465, //25,465, 2525
  secure: true,
  auth: {
    user: UKR_NET_EMAIL,
    pass: UKR_NET_PASSWORD
  }
};

const transport = nodemailer.createTransport(nodemailerConfig); 

const email = {
  from: UKR_NET_EMAIL,
  to: RECIPIENT_EMAIL,
  subject: "test Verify email",
  html: "<p> Hello. Verify email </p>"
};

transport.sendMail(email)
  .then(() => console.log("Email send success"))
  .catch(error=>console.log(error.message))
