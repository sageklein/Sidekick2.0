import React, { Component } from "react";
import StuffCard from "./StuffCard";
// import APIManager from "./modules/APIManager";
import "../../src/css/ItemTable.css";

class StuffList extends Component {
	state = {
		collection: []
	};

	render() {
		return (
			<>
				<div className="StoreTable">
					<section className="collection"></section>
					{this.state.collections.map(collection => (
						<StuffCard
							getData={this.getData}
							key={collection.id}
							collection={collection}
							name={collection.name}
							{...this.props}
						/>
					))}
				</div>
				;
			</>
		);
	}
}

export default StuffList;
