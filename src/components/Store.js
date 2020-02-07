import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import StoreList from "./StoreList"
import APIManager from "../components/modules/APIManager";
import "../../src/css/Store.css";

class Store extends Component {
	state = {
		items: []
	};
	getData = () => {
		APIManager.getAll().then(items => {
			this.setState({
				items: items
			});
		});
	}

	componentDidMount() {
		this.getData();
	}
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
							items={this.state.items}
							getData={this.getData}
							{...this.props}
						/>
					</div>
				</div>
				<Footer />
			</>
		);
	}
}

export default Store;
