import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Dasboard from "./Dashboard";

import "./App.css";

class App extends Component {
	render() {
		return (
			<div className="App">
				<HashRouter>
					<ul className="header">
						<li><NavLink to="/my_pokemon">My Pokemon</NavLink></li>
						<li><NavLink to="/">Pokemon List</NavLink></li>
					</ul>
					<div className="content container">
						<Dasboard></Dasboard>
					</div>
				</HashRouter>
			</div>
		);
	}
}

export default App;