import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import StuffList from "./StuffList";
// import APIManager from "../../modules/APIManager";
import "../../src/css/Store.css";

class Stuff extends Component {
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
					<div className="stuffList">
						<StuffList {...this.props} />
					</div>
				</div>
				<Footer />
			</>
		);
	}
}

export default Stuff;
