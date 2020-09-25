const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
	customerName: {
		type: String,
		required: true,
	},
	customerAge: {
		type: { type: Number, min: 18 },
	},
	serviceOfficerName: {
		type: String,
	},
	NRIC: {
		type: String,
		required: true,
		unique: true,
	},
	registrationTime: {
		type: String,
	},
	branchCode: {
		type: Number,
	},
	image: {
		type: String,
	},
	productType: {
		type: [String],
	},
});

module.exports = User = mongoose.model("form", FormSchema);
