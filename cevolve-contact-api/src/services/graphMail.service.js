require("isomorphic-fetch");

const { Client } = require("@microsoft/microsoft-graph-client");

const getAccessToken = require("../config/graph");
const loadTemplate = require("../utils/templateLoader");

/**
 * Returns authenticated Microsoft Graph Client
 */
async function getGraphClient() {
  const token = await getAccessToken();

  return Client.init({
    authProvider: (done) => {
      done(null, token);
    },
  });
}

/**
 * Generic Graph Mail Sender
 */
async function sendMail({ to, subject, html, replyTo = null }) {
  const client = await getGraphClient();

  const message = {
    subject,

    body: {
      contentType: "HTML",
      content: html,
    },

    toRecipients: [
      {
        emailAddress: {
          address: to,
        },
      },
    ],
  };

  // Reply-To (only for company notification)
  if (replyTo) {
    message.replyTo = [
      {
        emailAddress: {
          address: replyTo,
        },
      },
    ];
  }

  await client.api(`/users/${process.env.MAILBOX}/sendMail`).post({
    message,
    saveToSentItems: true,
  });

  return true;
}

/**
 * Send Lead Notification to Company
 */
async function sendLeadNotification(leadData) {
  const html = await loadTemplate("companyLead.html", leadData);

  return sendMail({
    to: process.env.MAIL_TO,

    subject: `🚀 New Website Lead | ${leadData.name}`,

    html,

    replyTo: leadData.email,
  });
}

/**
 * Send Acknowledgement to Customer
 */
async function sendAcknowledgement(leadData) {
  const html = await loadTemplate("acknowledgement.html", leadData);

  return sendMail({
    to: leadData.email,

    subject: "Thank you for contacting Cevolve Technologies",

    html,
  });
}

module.exports = {
  sendLeadNotification,
  sendAcknowledgement,
};