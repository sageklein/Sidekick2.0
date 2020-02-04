import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "../../src/css/Login.css";

class LoginForm extends Component {
	// Using a class based component here because we're accessing DOM refs

	handleSignIn(e) {
		e.preventDefault();
		let username = this.refs.username.value;
		let password = this.refs.password.value;
		this.props.onSignIn(username, password);
	}

	render() {
		return (
			<Form className="loginForm" onSubmit={this.handleSignIn.bind(this)}>
				<Form>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>Username</Form.Label>
						<Form.Control type="email" placeholder="username" />
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Link to="/Store">
						<img
							src={require("../images/loginButton.png")}
							className="LoginButton"
							alt="Login"
						/>
					</Link>
				</Form>
			</Form>
		);
	}
}
export default LoginForm;