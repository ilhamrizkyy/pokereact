import React, { Component } from "react";
import { PokemonConsumer } from './PokemonContext';
import PokemonCard from './PokemonCard';

class MyPokemon extends Component {
    render() {
        return (
            <PokemonConsumer>
                {({ pokemon, releasepokemon }) => (
                    <React.Fragment>
                        <h2>My Pokemon</h2>
                        <p>Successfully catched Pokemons</p>
                        {
                            pokemon.length > 0 ? pokemon.map(item => {
                                <PokemonCard
                                    key={pokemon.name}
                                    name={pokemon.name}
                                    nickname={pokemon.nickname}
                                    url={pokemon.url}
                                />

                                return (
                                    <div className="myPokemon" key={Math.random()}>
                                        <center>
                                            <h3>{pokemon.nickname}</h3>
                                            <button className="button" onClick={() => releasepokemon(pokemon.name)}>Release</button>
                                        </center>
                                    </div>
              );
                            }) : null
                        }
                    </React.Fragment>
                )}
            </PokemonConsumer>
        );
    }
}

export default MyPokemon;