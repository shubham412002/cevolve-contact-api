const { ConfidentialClientApplication } = require("@azure/msal-node");

const msalConfig = {
    auth: {
        clientId: process.env.CLIENT_ID,
        authority: `https://login.microsoftonline.com/${process.env.TENANT_ID}`,
        clientSecret: process.env.CLIENT_SECRET,
    },
};

const cca = new ConfidentialClientApplication(msalConfig);

async function getAccessToken() {
    const result = await cca.acquireTokenByClientCredential({
        scopes: ["https://graph.microsoft.com/.default"],
    });

    if (!result || !result.accessToken) {
        throw new Error("Unable to acquire Graph access token.");
    }

    return result.accessToken;
}

module.exports = getAccessToken;