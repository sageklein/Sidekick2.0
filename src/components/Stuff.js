import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../../src/css/Stuff.css";

class Stuff extends Component {
	render() {
		return (
			<>
				<NavBar />
				<div className="Stuff">
					<div className="Avatar">
						<img
							src={require("../images/raccoon.png")}
							className="racoon"
							alt="Raccoon"
						/>
					</div>
					<div className="Accessories">
						<img
							src={require("../images/Collection.png")}
							className="stuff"
							alt="Stuff"
						/>
					</div>
				</div>
				<Footer />
			</>
		);
	}
}

export default Stuff;