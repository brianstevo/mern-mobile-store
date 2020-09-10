import React from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";

const Signin = () => {
	return (
		<Base>
			<form
				className="col-12 col-sm-8 offset-sm-2 col-md-4 offset-md-4"
				style={{ marginTop: "100px" }}
			>
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
					Signin
				</button>
				<Link
					className="form-group btn btn-block btn-lg text-white"
					style={{ backgroundColor: "#f00" }}
					to="/signup"
				>
					Signup
				</Link>
			</form>
		</Base>
	);
};

export default Signin;
