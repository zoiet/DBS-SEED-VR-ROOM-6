const express = require("express");
const router = express.Router();

// @route  GET api/forms
// @desc   Test route
// @access Public
router.get("/", (req, res) => res.send("Forms route"));

module.exports = router;
