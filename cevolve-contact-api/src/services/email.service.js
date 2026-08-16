const transporter = require("../config/mail");
const loadTemplate = require("../utils/templateLoader");

/**
 * Send Lead Notification to Company
 */
const sendLeadNotification = async (leadData) => {
  const html = loadTemplate("companyLead.html", leadData);

  const mailOptions = {
    from: process.env.MAIL_FROM,

    to: process.env.MAIL_TO,

    replyTo: leadData.email,

    subject: `New Website Lead | ${leadData.name}`,

    html,
  };

  return await transporter.sendMail(mailOptions);
};

/**
 * Send Acknowledgement to Customer
 */
const sendAcknowledgement = async (leadData) => {
  const html = loadTemplate("acknowledgement.html", leadData);

  const mailOptions = {
    from: process.env.MAIL_FROM,

    to: leadData.email,

    subject: "Thank you for contacting Cevolve Technologies",

    html,
  };

  return await transporter.sendMail(mailOptions);
};

module.exports = {
  sendLeadNotification,
  sendAcknowledgement,
};
