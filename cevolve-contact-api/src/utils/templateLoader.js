const fs = require("fs");
const path = require("path");

/**
 * Load HTML template and replace placeholders.
 *
 * @param {string} templateName
 * @param {Object} data
 * @returns {string}
 */

const loadTemplate = (templateName, data = {}) => {
  // Build template path
  const templatePath = path.join(__dirname, "..", "templates", templateName);

  // Read HTML file
  let html = fs.readFileSync(templatePath, "utf8");

  // Replace placeholders
  Object.keys(data).forEach((key) => {
    const regex = new RegExp(`{{${key}}}`, "g");

    html = html.replace(regex, data[key] || "");
  });

  return html;
};

module.exports = loadTemplate;
