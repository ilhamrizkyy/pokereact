import React, { createContext } from 'react';

const PokemonContext = createContext();

export class PokemonProvider extends React.Component {
  updatemypokemon = newpokemon => {
    this.setState({ pokemon: this.state.pokemon.concat(newpokemon) });
  };

  releasepokemon = nickname => {
    let filteredPokemon = this.state.pokemon.filter(function(pokemon){
      return nickname !== pokemon.nickname;
    });
    this.setState({ pokemon: filteredPokemon });
  };

  state = {
    pokemon: [],
    updatemypokemon: this.updatemypokemon,
    releasepokemon: this.releasepokemon
  };

  render() {
    return (
      <PokemonContext.Provider value={this.state}>
        {this.props.children}
      </PokemonContext.Provider>
    );
  }
}

export const PokemonConsumer = PokemonContext.Consumer;
