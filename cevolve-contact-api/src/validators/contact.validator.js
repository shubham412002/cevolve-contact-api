// const { body } = require("express-validator");

// const contactValidator = [
//   body("name")
//     .trim()
//     .notEmpty()
//     .withMessage("Name is required.")
//     .isLength({ min: 2, max: 100 })
//     .withMessage("Name must be between 2 and 100 characters."),

//   body("email")
//     .trim()
//     .notEmpty()
//     .withMessage("Email is required.")
//     .isEmail()
//     .withMessage("Please enter a valid email address.")
//     .normalizeEmail(),

//   body("phone")
//     .trim()
//     .notEmpty()
//     .withMessage("Phone number is required.")
//     .isLength({ min: 10, max: 15 })
//     .withMessage("Phone number must be between 10 and 15 digits."),

//   body("company")
//     .optional()
//     .trim()
//     .isLength({ max: 100 })
//     .withMessage("Company name cannot exceed 100 characters."),

//   body("service")
//     .optional()
//     .trim()
//     .isLength({ max: 100 })
//     .withMessage("Service cannot exceed 100 characters."),

//   body("message")
//     .trim()
//     .notEmpty()
//     .withMessage("Message is required.")
//     .isLength({ min: 10, max: 2000 })
//     .withMessage("Message must be between 10 and 2000 characters."),
// ];

// module.exports = contactValidator;


const { body } = require("express-validator");

const contactValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required."),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required.")
    .bail()
    .isEmail()
    .withMessage("Please enter a valid email address.")
    .normalizeEmail(),

  body("phone")
    .trim()
    .notEmpty()
    .withMessage("Phone number is required."),

  body("company")
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 100 })
    .withMessage("Company name cannot exceed 100 characters."),

  body("service")
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 100 })
    .withMessage("Service cannot exceed 100 characters."),

  body("message")
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 2000 })
    .withMessage("Message cannot exceed 2000 characters."),
];

module.exports = contactValidator;