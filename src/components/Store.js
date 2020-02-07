import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import StoreList from "./StoreList"
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
					<div className="raccoon">
						<img
							src={require("../images/raccoon.png")}
							className="racoon"
							alt="raccoon"
						/>
					</div>
					<div className="Accessories">
						<StoreList
						/>
					</div>
					</div>
				<Footer />
			</>
		);
	}
}

export default Store;
