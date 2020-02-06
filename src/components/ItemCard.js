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

				<div className="Card">
					<Link to="/store">
						<p className="img">
							<span> {this.props.item.image}</span>
						</p>
					</Link>
					<div>
						<span className="name">
							{" "}
							{this.props.item.name}
						</span>
					</div>
					<p className="price">{this.props.item.price} Points</p>
				</div>

			</>
		);
	}
}

export default ItemCard;
