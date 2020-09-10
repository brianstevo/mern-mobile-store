import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import Profile from "./core/Profile";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/user/:userId" exact component={Profile} />
				<Route path="/signup" exact component={Signup} />
				<Route path="/signin" exact component={Signin} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
