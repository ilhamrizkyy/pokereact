import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from "react";
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";
import Dasboard from "./Dashboard";
import PokemonDetail from "./pokemon/PokemonDetail.js";
import MyPokemon from "./pokemon/MyPokemon";
import {PokemonProvider} from "./pokemon/PokemonContext";

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
						<Switch>
							<Route exact path="/" component={Dasboard}></Route>
							<Route exact path="/pokemondetail/:pokemonIndex" component={PokemonDetail} />
							<Route path="/my_pokemon" component={MyPokemon} />
						</Switch>
					</div>
				</HashRouter>
			</div>
		);
	}
}

export default App;