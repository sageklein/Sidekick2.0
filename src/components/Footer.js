import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../src/css/Footer.css";


class Footer extends Component {
	render() {
	return (
		<>
			<div className="footer">
				<Link
					className="link"
					activeClass="active"
					// onClick={() => history.goBack()}
				>
					<img
						src={require("../images/Back.png")}
						className="back"
						alt="back"
					/>
				</Link>
			</div>
		</>
	);

}
}
export default Footer;
