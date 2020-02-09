import React, { Component } from "react";
import APIManager from "./modules/APIManager";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../../src/css/ItemTable.css";

class StuffCard extends Component {
	state = {
		image: [],
		modal: false
	};

	delete = (id) => {
		APIManager.delete(id)
		.then(() => this.props.getData())
	}

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
								<img
									src={require(`../images/${this.props.item.image}`)}
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
									onClick={() => {
										this.delete(this.props.item.collectionItemId);
										this.toggle();
									}}
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
						<span className="name"> {this.props.item.name}</span>
					</div>
				</div>
			</>
		);
	}
}

export default StuffCard;