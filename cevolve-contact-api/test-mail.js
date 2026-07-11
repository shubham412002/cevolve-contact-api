require("dotenv").config();

const transporter = require("./src/config/mail");

async function verifySMTP() {
    try {
        await transporter.verify();
        console.log("✅ SMTP Connected Successfully");
    } catch (error) {
        console.error("❌ SMTP Connection Failed");
        console.error(error);
    }
}

verifySMTP();