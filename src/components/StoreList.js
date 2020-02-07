import React, { Component } from "react";
import ItemCard from "./StoreCard"
import APIManager from "./modules/APIManager"
import "../../src/css/ItemTable.css";

class StoreList extends Component {
	state = {
		items: []
	};

	componentDidMount() {
		console.log("Item LIST: ComponentDidMount");
		APIManager.getAll().then(items => {
			this.setState({
				items: items
			});
		});
	}
	getData = () => {
		APIManager.getAll().then(
			items => {
				this.setState({
					items: items
				});
			}
		);
	};

	render() {
		return (
			<>
				<div className="StoreTable">
					<section className="collectionParent"></section>
					{this.state.items.map(item => (
						<ItemCard
							props={this.state.items}
							getData={this.getData}
							key={item.id}
							item={item}
							name={item.name}
							{...this.props}
						/>
					))}
				</div>
				;
			</>
		);
	}
}

export default StoreList;