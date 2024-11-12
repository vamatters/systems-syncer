require("dotenv").config();
const axios = require("axios");

function oauthController(req, res) {
  const oauthUrl = `https://marketplace.leadconnectorhq.com/oauth/chooselocation?response_type=code&redirect_uri=${process.env.REDIRECT_URI}&client_id=${process.env.CLIENT_ID}&scope=${process.env.SCOPE}`;
  res.redirect(oauthUrl);
}

async function handleCallback(req, res) {
  const code = req.query.code;
  console.log("code", code);

  if (!code) {
    console.log("No authorization code found in the callback.");
    return res.status(400).send("Authorization code not found.");
  }

  const tokenUrl = process.env.TOKEN_URI;

  try {
    const response = await axios.post(tokenUrl, {
      code,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      redirect_uri: process.env.REDIRECT_URI,
      grant_type: "authorization_code",
    });

    const { access_token, refresh_token } = response.data;

    console.log(access_token);
    console.log(refresh_token);

    res.json({ access_token, refresh_token });
  } catch (error) {
    console.error("Error exchanging code for token:", error);
    res.status(500).send("Failed to obtain access token.");
  }
}

module.exports = { oauthController, handleCallback };
