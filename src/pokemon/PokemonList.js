import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import { PokemonConsumer } from './PokemonContext';

import axios from 'axios';


export default class PokemonList extends Component {
    state = {
        url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151',
        pokemon: null
    };

    async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({ pokemon: res.data['results'] });
    }

    render() {
        return (
            <PokemonConsumer>
                {({ pokemon }) => (
                    <div>
                        <center>
                            <h2>Pokemon List</h2>
                        </center>
                        <center>
                            <h5 className="pb-3">Total Pokemon Owned: {pokemon.length}</h5>
                        </center>
                        {this.state.pokemon ? (
                            <div className="row">
                                {this.state.pokemon.map(pokemon => (
                                    <PokemonCard
                                        key={pokemon.name}
                                        name={pokemon.name}
                                        url={pokemon.url}
                                    />
                                ))}
                            </div>
                        ) : (
                                <h1>Loading</h1>
                            )}
                    </div>
                )}
            </PokemonConsumer>
        )
    }
}