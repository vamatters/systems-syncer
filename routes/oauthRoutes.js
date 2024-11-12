const express = require("express");
const router = express.Router();
const oauthController = require("../controllers/oauthController");

// Route that will hit the Go High Level OAuth endpoint
router.get("/authorize", oauthController.oauthController);

router.get("/callback", oauthController.handleCallback);

module.exports = router;
