import React, { Component }  from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import "./App.css";

class App extends Component{
	render(){
		return(
			<HashRouter>
					<ul className="header">
						<li><NavLink to="/my_pokemon">My Pokemon</NavLink></li>
						<li><NavLink to="/">Pokemon List</NavLink></li>
					</ul>
					<div className="content">
					</div>
			</HashRouter>
		);
	}
}

export default App;