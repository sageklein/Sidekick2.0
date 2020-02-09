import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import StuffList from "./StuffList";
import APIManager from "../components/modules/APIManager";
import "../../src/css/Store.css";

class Stuff extends Component {
	state = {
		collectionId: 1,
		items: []
	};
	getData = () =>
		APIManager.getCollection(this.state.collectionId).then(collection =>
			APIManager.getCollectionItems(collection.id).then(
				collectionItemArray => {
					this.setState({ items: [] });
					collectionItemArray.forEach(collectionItem =>
						APIManager.getItem(collectionItem.itemId).then(item => {
							item.collectionItemId=collectionItem.id;
							this.state.items.push(item);
							this.setState({
								items: this.state.items
							});
						})
					);
				}
			)
		);

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
					<div className="stuffList">
						<StuffList
							collection={this.state.collection}
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

export default Stuff;
