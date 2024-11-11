const express = require("express");
const router = express.Router();
const { greetUser } = require("../controllers/greetController");

router.get(`/:myName`, greetUser);

module.exports = router;
