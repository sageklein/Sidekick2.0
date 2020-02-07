import React, { Component } from "react";
import APIManager from "./modules/APIManager";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../../src/css/ItemTable.css";

class StuffCard extends Component {
	state = {
		items: [],
		image: [],
		modal: false
	};

	handleDelete = id => {
		APIManager.delete(id).then(() => this.props.getData());
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
		console.log("image", `../images/${this.props.item}`);
		return (
			<>
				<div className="Card">
					<div>
						<Link onClick={this.toggle}>
							<p className="img">
								<img
									src={require(`../images/${this.props.items.image}`)}
									alt="Stuff"
								/>
							</p>
						</Link>
						<Modal isOpen={this.state.modal} toggle={this.toggle}>
							<ModalHeader toggle={this.toggle}>
								What Would You Like to Do With This Item?
							</ModalHeader>
							<ModalBody>
								You can use this item,
								<p>Or Delete This Item</p>
							</ModalBody>
							<ModalFooter>
								<Button
									className="delete"
									onClick={() => this.props.handleDelete(this.props.item.id)}
								>
									Delete
								</Button>{" "}
								<Button
									className="cancel"
									onClick={this.toggle}
								>
									Use
								</Button>
							</ModalFooter>
						</Modal>
					</div>
					<div>
						<span className="name"> {this.props.items.name}</span>
					</div>
					<p className="price">{this.props.items.price} Points</p>
				</div>
			</>
		);
	}
}

export default StuffCard;
