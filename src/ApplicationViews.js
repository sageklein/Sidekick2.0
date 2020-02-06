import { Route } from "react-router-dom";
import React, { Component } from "react";
import Login from "./components/Login";
import Sidekick from "./components/Sidekick";
import Store from "./components/Store";
import Stuff from "./components/Stuff";
import ShowOff from "./components/ShowOff";
import Home from "./components/Home"
import Footer from "./components/Footer"

export default class ApplicationViews extends Component {
	render() {
		console.log("from app js", this.props);
		return (
			<>
				<Route
					exact
					path="/"
					render={props => {
						return <Home {...props} />;
					}}
				/>
				<Route
					exact
					path="/sidekick"
					render={props => {
						return (
							<Sidekick
								user={this.props.user}
								setUser={this.props.setUser}
								{...props}
							/>
						);
					}}
				/>
				<Route
					exact
					path="/stuff"
					render={props => {
						return (
							<Stuff
								user={this.props.user}
								setUser={this.props.setUser}
								{...props}
							/>
						);
					}}
				/>
				<Route
					exact
					path="/store"
					render={props => {
						return (
							<Store setUser={this.props.setUser} {...props} />
						);
					}}
				/>
				<Route
					exact
					path="/ShowOff"
					render={props => {
						return (
							<ShowOff setUser={this.props.setUser} {...props} />
						);
					}}
				/>
				<Route
					exact
					path="/login"
					render={props => {
						return (
							<Login setUser={this.props.setUser} {...props} />
						);
					}}
				/>
				<Route
					exact
					path="/footer"
					render={props => {
						return (
							<Footer {...props}
							props={this.props} />
						);
					}}
				/>

				{/* <Route
					exact
					path="/dashboard"
					render={props => {
						if (this.props.isAuthenticated()) {
							return <Dashboard {...props} />;
						} else {
							return <Redirect to="/login" />;
						}
					}}
				/> */}
			</>
		);
	}
}
