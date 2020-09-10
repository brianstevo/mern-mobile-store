const User = require("./../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const JoiValidation = require("./validation");

exports.signup = async (req, res) => {
	const { error } = JoiValidation.signupValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const salt = await bcrypt.genSalt(10);
	req.body.password = await bcrypt.hash(req.body.password, salt);
	try {
		const user = await User.create(req.body);
		res.status(201).json({
			name: user.name,
			email: user.email,
			password: user.password,
			id: user._id,
		});
	} catch (err) {
		return res.status(400).json({
			error: "User already exists",
		});
	}
};

exports.signin = async (req, res) => {
	const { error } = JoiValidation.signinValidation(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	const user = await User.findOne({ email: req.body.email });
	if (!user)
		return res.status(400).json({
			error: "user does not exists",
		});
	const validPassword = await bcrypt.compare(req.body.password, user.password);
	if (!validPassword) {
		return res.status(401).json({
			error: "Email and password do not match",
		});
	}
	const token = jwt.sign({ _id: user._id }, process.env.SECRET);
	res.header("token", token);
	/*res.set('Content-Type', 'text/plain'); */
	//send response to front end
	const { _id, name, email, role } = user;
	return res.json({
		token,
		user: {
			_id,
			name,
			email,
			role,
		},
	});
};
exports.signout = (req, res) => {
	// delete header token
	delete req.headers["token"];
	res.json({
		message: "User signout successfully",
	});
};

exports.auth = (req, res, next) => {
	const token = req.header("token");
	if (!token) return res.status(401).send("Access Denied");
	try {
		const verified = jwt.verify(token, process.env.SECRET);
		req.auth = verified;
		next();
	} catch (err) {
		return res.status(401).json({
			error: "Invalid Token",
		});
	}
};
exports.isAuthenticated = (req, res, next) => {
	//profile is from getUserByID and auth is from isSignedIn
	let checker = req.profile && req.auth && req.profile._id == req.auth._id; //== not === because of object
	if (!checker) {
		//== used to compare object values === doesnot work on object
		return res.status(404).json({
			error: "Access denied not authenticated",
		});
	}
	next();
};
exports.isAdmin = (req, res, next) => {
	if (req.profile.role === 0) {
		return res.status(403).json({
			error: "your not an Admin",
		});
	}
	next();
};
