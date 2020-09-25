const express = require("express");
const router = express.Router();
const request = require("request");

// @route         POST /login
// @description   Login officer
// @access        Public
router.post("/", async (req, res) => {
	try {
		const post_data = {
			username: req.body.username,
			password: req.body.password,
		};

		const options = {
			uri: "http://techtrek2020.ap-southeast-1.elasticbeanstalk.com/login",
			body: JSON.stringify(post_data),
			method: "POST",
			headers: { "user-agent": "node.js", "Content-Type": "application/json" },
		};

		request(options, (error, response, body) => {
			if (error) console.log(error);

			if (response.statusCode !== 200) {
				return res.status(404).json({ msg: "Invalid credentials" });
			}

			res.json({ token: body });
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

module.exports = router;
