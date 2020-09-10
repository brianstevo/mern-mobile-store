const Joi = require("joi");

exports.signupValidation = (data) => {
	const schema = Joi.object({
		name: Joi.string().min(3).max(30).required(),
		lastname: Joi.string().max(30),

		password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

		email: Joi.string().required().email({
			minDomainSegments: 2,
		}),
		role: Joi.number(),
	});
	return schema.validate(data);
};
exports.signinValidation = (data) => {
	const schema = Joi.object({
		password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),

		email: Joi.string().required().email({
			minDomainSegments: 2,
		}),
	});
	return schema.validate(data);
};
