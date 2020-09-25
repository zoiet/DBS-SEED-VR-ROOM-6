const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Form = require("../models/Form");

// @route         POST /forms
// @description   Submit form
// @access        Public
router.post(
	"/",
	[
		check("customerName", "Invalid customer name")
			.not()
			.isEmpty()
			.isLength({ max: 64 }),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { NRIC } = req.body;

		try {
			// Check if form exists
			let form = await Form.findOne({ NRIC });

			if (form) {
				return res
					.status(400)
					.json({ errors: [{ msg: "Form with NRIC already exists" }] });
			}

			await form.save();
		} catch (err) {
			console.error(err.message);
			res.status(500).send("Server Error");
		}

		console.log(req.body);
		res.send("Forms route");
	}
);

module.exports = router;
