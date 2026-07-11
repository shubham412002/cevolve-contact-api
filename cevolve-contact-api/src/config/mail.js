// const nodemailer = require("nodemailer");

// /**
//  * SMTP Transporter
//  * ----------------
//  * This transporter will be used throughout the application
//  * to send emails.
//  */
// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: Number(process.env.SMTP_PORT),
//   secure: process.env.SMTP_SECURE === "true",

//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },

//   pool: true,
//   maxConnections: 5,
//   maxMessages: 100,

//   tls: {
//     rejectUnauthorized: false,
//   },
// });

// module.exports = transporter;

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // TLS on port 587

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },

  requireTLS: true,

  tls: {
    ciphers: "TLSv1.2",
  },
});

module.exports = transporter;
