import React from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";

const Signup = () => {
	return (
		<Base>
			<form
				className="col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4"
				style={{ marginTop: "100px" }}
			>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						id="name"
						placeholder="Enter your Name"
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						id="lastname"
						placeholder="Enter your LastName"
					/>
				</div>
				<div className="form-group">
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Enter email"
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						placeholder="Password"
					/>
				</div>
				<button
					type="submit"
					className="form-group btn btn-block btn-primary btn-lg"
				>
					Signup
				</button>
				<Link
					className="form-group btn btn-block btn-lg text-white"
					style={{ backgroundColor: "#f00" }}
					to="/signin"
				>
					Signin
				</Link>
			</form>
		</Base>
	);
};

export default Signup;
