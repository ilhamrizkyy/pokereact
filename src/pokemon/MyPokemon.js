import React, { Component } from "react";
import { PokemonConsumer } from './PokemonContext';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Cards = styled.div`
opacity: 0.95;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
&:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
-moz-user-select: none;
-website-user-select: none;
-ms-user-select: none;
user-select: none;
-o-us
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;


class MyPokemon extends Component {

    state = {
        name: '',
        imageUrl: '',
        imageLoading: true,
        toManyRequests: false,
        pokemonIndex: '',
    }
    componentDidMount() {
        const name = this.state.name;
        const url = this.state.url;

        this.setState({
            name: name,
        })
    }

    render() {
        return (
            <PokemonConsumer>
                {({ pokemon, releasepokemon }) => (
                    <React.Fragment>
                        <center>
                            <h2>My Pokemon</h2>
                        </center>
                        <div className="row">
                            {
                                pokemon.length > 0 ? pokemon.map(item => {
                                    const { name, nickname, id } = item;

                                    return (
                                        <div className="col-md-4 col-sm-6 mb-4">
                                            <StyleLink>
                                                <Cards className="card">
                                                    <div className="card-header">
                                                        <h5>{this.state.pokemonIndex}</h5>
                                                    </div>
                                                    <div className="myPokemon" key={Math.random()}>
                                                        <center>
                                                            <h5 className="p-2 pb-1">{nickname}</h5>
                                                            <div className="card-body mx-auto">
                                                                <h6 className="card-title">(
                                                                {name.toLowerCase().split(" ").map(
                                                                    letter => letter.charAt(0).toUpperCase() + letter.substring(1)
                                                                ).join("")}
                                                             )
                                                            </h6>
                                                            </div>
                                                            <Button variant="danger" onClick={() => releasepokemon(id)} className="mb-4">
                                                                Release {name.toLowerCase().split(" ").map(
                                                                letter => letter.charAt(0).toUpperCase() + letter.substring(1)
                                                            ).join("")}
                                                            </Button>
                                                        </center>
                                                    </div>
                                                </Cards>
                                            </StyleLink>

                                        </div>
                                    );
                                }) : null
                            }

                        </div>
                    </React.Fragment>
                )}
            </PokemonConsumer>
        );
    }
}

export default MyPokemon;