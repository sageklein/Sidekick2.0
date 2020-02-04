import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../src/css/NavBar.css";

class NavBar extends Component {

	isAuthenticated = () => sessionStorage.getItem("activeUser") !== null;

	logOut = () => {
		this.props.clearUser();
		this.props.history.push("/login");
	};
	render() {
		return (
			<div className="nav">
				<ul>
					<li>
						<Link
							className="link"
							activeClass="active"
							to="/Store"
						>
							Store
						</Link>
					</li>
					<li>
						<Link
							className="link"
							activeClass="active"
							to="/sidekick"
						>
							Sidekick
						</Link>
					</li>
					<li>
						<Link className="link" activeClass="active" to="/login">
							Logout
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default NavBar;
