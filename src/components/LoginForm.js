import React, { Component } from "react";
import { Link } from "react-router-dom";



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
			<form onSubmit={this.handleSignIn.bind(this)}>
				<input type="text" ref="username" placeholder="Username" />
				<input type="password" ref="password" placeholder="Password" />
				<Link to="/Store">
					<button>Login</button>
				</Link>
			</form>
		);
	}
}
export default LoginForm;