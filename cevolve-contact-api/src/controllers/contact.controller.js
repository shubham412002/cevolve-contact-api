const {
  sendLeadNotification,
  sendAcknowledgement,
} = require("../services/graphMail.service");

const sendContactForm = async (req, res) => {
  try {
    const leadData = {
      name: req.body.name?.trim(),
      email: req.body.email?.trim(),
      phone: req.body.phone?.trim(),
      company: req.body.company?.trim() || "N/A",
      service: req.body.service?.trim() || "General Enquiry",
      message: req.body.message?.trim(),
    };

    console.log("📩 New Lead Received");
    console.table(leadData);

    // // Send notification to company
    // await sendLeadNotification(leadData);

    // // Send acknowledgement to customer
    // await sendAcknowledgement(leadData);

    await Promise.all([
      sendLeadNotification(leadData),
      sendAcknowledgement(leadData),
    ]);

    return res.status(200).json({
      success: true,
      message:
        "Thank you for contacting Cevolve Technologies. We have received your enquiry successfully.",
    });
  } catch (error) {
    console.error("Contact Form Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to process your request. Please try again later.",
    });
  }
};

module.exports = {
  sendContactForm,
};
