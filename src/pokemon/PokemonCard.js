import React, { Component } from 'react';

import styled from '@emotion/styled';
import loading from '../spinner.gif';

const Sprites = styled.img`
    width: 5em;
    height: 5em;
    border: none;
`

const Cards = styled.div`

`

export default class PokemonCard extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: '',
        imageLoading: true,
        toManyRequests: false,
    }

    componentDidMount() {
        const { name, url } = this.props;
        const pokemonIndex = url.split("/")[url.split('/').length - 2];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

        this.setState({
            name: name,
            imageUrl: imageUrl,
            pokemonIndex: pokemonIndex,

        })
    }
    render() {
        return (
            <div className="col-md-4 col-sm-6 mb-5">
                <div className="card">
                    <div className="card-header">
                        <h5>{this.state.pokemonIndex}</h5>
                    </div>
                    {this.state.imageLoading ? (
                        <img
                            src={loading}
                            style={{ width: '5em', height: '5em' }}
                            className="card-img-top rounded mx-auto d-block mt-2"
                        />
                    ) : null}
                    <Sprites className="card img-top mx-auto mt-2"
                        onLoad={() => this.setState({ imageLoading: false })}
                        onError={() => this.setState({ toManyRequests: true })}
                        style={
                            this.state.toManyRequests
                                ? { display: 'none' }
                                : this.state.imageLoading
                                    ? null
                                    : { display: 'block' }
                        }
                        src={this.state.imageUrl}>

                    </Sprites>
                    <div className="card-body mx-auto">
                        <h6 className="card-title">
                            {this.state.name.toLowerCase().split(" ").map(
                                letter => letter.charAt(0).toUpperCase() + letter.substring(1)
                            ).join("")}
                        </h6>
                    </div>
                </div>
            </div>
        )
    }
}
