import React, { Component } from "react";
import StuffCard from "./StuffCard";
// import APIManager from "./modules/APIManager";
import "../../src/css/ItemTable.css";

class StuffList extends Component {
	state = {
		items: []
	};

	render() {
		return (
			<>
				<div className="StoreTable">
					<section className="collection"></section>
                    {
                    this.props.items.map(item => (
						<StuffCard key={item.collectionItemId} item={item} name={item.name} {...this.props} />
					))}
				</div>
				;
			</>
		);
	}
}

export default StuffList;
