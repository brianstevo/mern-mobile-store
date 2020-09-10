import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./core.css";

const currentTab = (history, path) => {
	if (history.location.pathname === path) {
		return { color: "#00FF00" };
	} else {
		return { color: "#fff" };
	}
};

const Menu = ({ history }) => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-dark">
				<div className="navbar-brand ml-5 mr-5 text-light lead font-weight-bold">
					Navbar
				</div>
				<button
					className="navbar-toggler bg-light"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav mx-auto">
						<Link style={currentTab(history, "/")} className="nav-link" to="/">
							Home
						</Link>
						<Link style={currentTab(history, "/")} className="nav-link" to="/">
							Home
						</Link>
						<Link style={currentTab(history, "/")} className="nav-link" to="/">
							Home
						</Link>
						<Link style={currentTab(history, "/")} className="nav-link" to="/">
							Home
						</Link>
					</div>
					<div className="navbar-nav mr-4">
						<Link
							style={currentTab(history, "/signup")}
							className="nav-link"
							to="/signup"
						>
							signup
						</Link>
						<Link
							style={currentTab(history, "/signin")}
							className="nav-link"
							to="/signin"
						>
							signin
						</Link>
						<Link
							style={currentTab(history, "/signout")}
							className="nav-link"
							to="/signout"
						>
							signout
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default withRouter(Menu);
