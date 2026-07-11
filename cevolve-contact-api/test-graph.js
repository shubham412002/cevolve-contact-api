require("dotenv").config();

const {
  sendLeadNotification,
  sendAcknowledgement,
} = require("./src/services/graphMail.service");

(async () => {
  try {
    const lead = {
      name: "Shubham Patankar",
      email: "shubhampatankar412002@gmail.com",
      phone: "+91 9876543210",
      company: "Cevolve Technologies",
      service: "Website Development",
      message:
        "Testing Microsoft Graph integration with HTML email templates.",
    };

    await sendLeadNotification(lead);

    await sendAcknowledgement(lead);

    console.log("✅ Both emails sent successfully.");
  } catch (error) {
    console.error("❌ Error:", error);
  }
})();