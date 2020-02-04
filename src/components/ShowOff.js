import React, { Component } from "react";
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import "../../src/css/Show.css";

class ShowOff extends Component {
	render() {
		return (
			<>
            <NavBar />
            <div className="showContainer">
				<div className="ShowOff">
					<img
						src={require("../images/raccoon.png")}
						alt="Stuff"
					/>
				</div>
                </div>
			<Footer />
			</>
		);
	}
}

export default ShowOff;
