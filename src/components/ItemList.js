import React, { Component } from "react";
import ItemCard from "../components/ItemCard"
import APIManager from "../components/modules/APIManager"
import "../../src/css/ItemTable.css";

class ItemList extends Component {
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

	render() {
		return (
			<>
					<div className="StoreTable">
                        				<section className="collectionParent"></section>
						{this.state.items.map(item => (
							<ItemCard
								props={this.state.items}
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

export default ItemList;