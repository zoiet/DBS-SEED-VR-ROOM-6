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

		// Get token
		let token = req.header("Authorization");
		if (!token || !token.includes("Bearer ")) {
			return res
				.status(401)
				.json({ msg: "Invalid token, authorization denied" });
		}

		const {
			customerName,
			customerAge,
			serviceOfficerName,
			NRIC,
			registrationTime,
			branchCode,
			image,
			productType,
		} = req.body;

		const formFields = {
			customerName,
			customerAge,
			serviceOfficerName,
			NRIC,
			registrationTime,
			branchCode,
			image,
			productType,
		};

		try {
			// Since one form is link to only one NRIC, update form if exists, else create new form
			let form = await Form.findOne({ NRIC });

			// TODO: Call validation API to validate fields before accessing mongo
			const options = {
				uri:
					"http://techtrek2020.ap-southeast-1.elasticbeanstalk.com/validateForm",
				body: JSON.stringify(formFields),
				method: "POST",
				headers: {
					"user-agent": "node.js",
					"Content-Type": "application/json",
					Authorization: token,
				},
			};

			request(options, (error, response, body) => {
				if (error) console.log(error);

				if (response.statusCode !== 200) {
					return res.status(404).json({ msg: "Invalid form entry" });
				}
			});

			// Update
			if (form) {
				form = await Form.findOneAndUpdate(
					{ NRIC },
					{ $set: formFields },
					{ new: true }
				);
				return res.json(form);
			}

			// Create
			form = new Form(formFields);
			await form.save();
			return res.json(form);
		} catch (err) {
			console.error(err.message);
			return res.status(500).send("Server Error");
		}
	}
);

// @route         GET /forms/:NRIC
// @description   Get form details based on NRIC
// @access        Public
router.get("/:NRIC", async (req, res) => {
	try {
		const form = await Form.findOne({ NRIC: req.params.NRIC });
		return res.json(form);
	} catch (err) {
		console.error(err.message);
		return res.status(500).send("Server Error");
	}
});

module.exports = router;
