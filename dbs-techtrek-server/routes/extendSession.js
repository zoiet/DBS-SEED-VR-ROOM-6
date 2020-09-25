const express = require("express");
const router = express.Router();
const request = require("request");

// @route         GET /extendSession
// @description   Get new authorized token
// @access        Public
router.get("/", async (req, res) => {
	// Get token
	let token = req.header("Authorization");
	if (!token || !token.includes("Bearer ")) {
		return res.status(401).json({ msg: "Invalid token, authorization denied" });
	}
	try {
		const options = {
			uri:
				"http://techtrek2020.ap-southeast-1.elasticbeanstalk.com/extendSession",
			method: "GET",
			headers: {
				"user-agent": "node.js",
				"Content-Type": "application/json",
				Authorization: token,
			},
		};

		request(options, (error, response, body) => {
			if (error) console.log(error);

			if (response.statusCode !== 200) {
				return res.status(403).json({ msg: "Invalid credentials" });
			}

			res.json({ token: body });
		});
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

module.exports = router;
