const express = require("express");
const router = express.Router();

const { sendContactForm } = require("../controllers/contact.controller");

const contactValidator = require("../validators/contact.validator");
const validateRequest = require("../middleware/validation.middleware");
const contactLimiter = require("../middleware/contactLimiter");
const burstLimiter = require("../middleware/burstLimiter");
const emailCooldown = require("../middleware/emailCooldown");

router.post(
  "/contact",

  burstLimiter,

  contactLimiter,

  emailCooldown,

  contactValidator,

  validateRequest,

  sendContactForm,
);

router.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Contact Route Working 🚀",
  });
});

module.exports = router;
