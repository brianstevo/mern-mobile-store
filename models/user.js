const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			maxlength: 32,
			trim: true,
		},
		name: {
			type: String,
			maxlength: 32,
			trim: true,
		},
		lastname: {
			type: String,
			maxlength: 32,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: Number,
			default: 0,
		},
		purchases: {
			type: Array,
			default: [],
		},
	},
	{
		timestamps: true,
	}
);
const User = mongoose.model("User", userSchema);
module.exports = User;
