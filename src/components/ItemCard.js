import React, { Component } from "react";
// import APIManager from "../components/modules/APIManager";
import { Link } from "react-router-dom";
import "../../src/css/ItemTable.css";

class ItemCard extends Component {
	state = {
		items: []
	};
	render() {
		return (
			<>
				<div className="Items">
					<Link to="/store">
						<p>
							<span className="itemId">
								{" "}
								{this.props.item.image}
							</span>
						</p>
					</Link>
					<div>
						<span className="itemName">
							{" "}
							{this.props.item.name}
						</span>
					</div>
					<p>{this.props.item.price} Points</p>
				</div>
			</>
		);
	}
}

export default ItemCard;
