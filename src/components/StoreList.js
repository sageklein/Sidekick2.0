import React, { Component } from "react";
import StoreCard from "./StoreCard"
// import APIManager from "./modules/APIManager"
import "../../src/css/ItemTable.css";

class StoreList extends Component {
	state = {
		items: []
	};

	render() {
		return (
			<>
				<div className="StoreTable">
					<section className="storeCard"></section>
					{this.props.items.map(item => (
						<StoreCard
							key={item.id}
							item={item}
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