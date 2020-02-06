import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import APIManager from "../../modules/APIManager";
import "../../src/css/Stuff.css";

class Stuff extends Component {
	render() {
		return (
			<>
				<NavBar />

				<div className="Stuff">
					<img
						src={require("../images/Points.png")}
						className="points"
						alt="store"
					/>
					<div className="raccoon">
						<img
							src={require("../images/raccoon.png")}
							className="racoon"
							alt="raccoon"
						/>
					</div>
					<div className="Collection">
						<img
							src={require("../images/Collection.png")}
							className="Collection"
							alt="Collection"
						/>
					</div>
				</div>
				<Footer />
			</>
		);
	}
}

export default Stuff;
