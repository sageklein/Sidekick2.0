import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import APIManager from "../../modules/APIManager";
import "../../src/css/Store.css";

class Store extends Component {
	render() {
		return (
			<>
				<NavBar />

				<div className="Store">
					<img
						src={require("../images/Points.png")}
						className="points"
						alt="store"
					/>
					<div className="Avatar">
						<img
							src={require("../images/raccoon.png")}
							className="racoon"
							alt="raccoon"
						/>
					</div>
					<div className="Accessories">
						<img
							src={require("../images/AccessorriesStore.png")}
							className="Acc"
							alt="Accessories"
						/>
					</div>
					</div>
				<Footer />
			</>
		);
	}
}

export default Store;
