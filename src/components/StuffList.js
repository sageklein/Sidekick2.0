import React, { Component } from "react";
import StuffCard from "./StuffCard";
import APIManager from "./modules/APIManager";
import "../../src/css/ItemTable.css";

class StuffList extends Component {
	state = {
		collections: []
	};

	delete = id => {
		APIManager.delete(id).then(() => {
			APIManager.getAll().then(collections => {
				this.setState({
					collections: collections
				});
			});
		});
	};
	getData = () => {
		APIManager.getAll().then(collections => {
			this.setState({
				collections: collections
			});
		});
	};

	render() {
		return (
			<>
				<div className="StoreTable">
					<section className="collection"></section>
					{this.state.collections.map(collection => (
						<StuffCard
							getData={this.getData}
							props={this.state.items}
							key={collection.id}
							collection={collection}
							name={collection.name}
							delete={this.delete}
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
