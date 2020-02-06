import React, { Component } from "react";
import Login from "../components/Login";
import "../../src/css/Show.css";
import { HashRouter } from "react-router-dom";

class Home extends Component {
	render() {
		return (
			<>
            <HashRouter>
				<Login />
            </HashRouter>
			</>
		);
	}
}

export default Home;
