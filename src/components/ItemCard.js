import React, { Component } from "react";
// import APIManager from "../components/modules/APIManager";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "../../src/css/ItemTable.css";



class ItemCard extends Component {
	state = {
        items: [],
        modal: false
	};

	modal = () => {
		this.setState(modal => ({
			modal: modal
		}));
	};

	toggle = () => {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	};

	render() {
		return (
			<>
				<div className="Card">
					<div>
						<Link onClick={this.toggle}>
							<p className="img">
								<span> {this.props.item.image}</span>
							</p>
						</Link>
						<Modal isOpen={this.state.modal} toggle={this.toggle}>
							<ModalHeader toggle={this.toggle}>
								Would You like to Buy This Item?
							</ModalHeader>
							<ModalBody>
								You have: 300 Points
								<p>Item Costs: {this.props.item.price}</p>
							</ModalBody>
							<ModalFooter>
								<Button className="buy" onClick={this.toggle}>
									Buy
								</Button>{" "}
								<Button
									className="cancel"
									onClick={this.toggle}
								>
									Cancel
								</Button>
							</ModalFooter>
						</Modal>
					</div>
					<div>
						<span className="name"> {this.props.item.name}</span>
					</div>
					<p className="price">{this.props.item.price} Points</p>
				</div>
			</>
		);
	}
}


export default ItemCard;
