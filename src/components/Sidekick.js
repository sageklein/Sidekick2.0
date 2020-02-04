import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer"
import NavBar from "../components/NavBar";
import "../../src/css/Sidekick.css";

class Sidekick extends Component {
	render() {
		return (
			<>
				<NavBar />
				<div className="whereTo">
					<img
						src={require("../images/whereTo.png")}
						alt="Where would you like to go?"
					/>
				</div>
				<div className="buttonSet">
					<Link className="link" to="/ShowOff">
						<img
							src={require("../images/See.png")}
							alt="See my Sidekick"
						/>
					</Link>

					<img
						src={require("../images/or.png")}
						className="or"
						alt="Or"
					/>
					<div className="">
						<Link className="link" to="/Stuff">
							<img
								src={require("../images/Stuff.png")}
								alt="See my Stuff"
							/>
						</Link>
					</div>
				</div>
				<Footer />
			</>
		);
	}
}

export default Sidekick;
