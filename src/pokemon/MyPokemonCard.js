import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Sprites = styled.img`
    width: 5em;
    height: 5em;
    border: none;
`
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


export default class MyPokemonCard extends Component {
  state = {
    name: '',
    imageUrl: '',
    imageLoading: true,
    toManyRequests: false,
  }

  componentDidMount() {
    const name = this.state.name;
    const url = this.state.url;
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${name}.png?raw=true`;

    this.setState({
      name: name,
      imageUrl: imageUrl,

    })
  }
  render() {
    return (
      <div className="col-md-4 col-sm-6 mb-4">
        <StyleLink>
          <Cards className="card">
            <div className="card-header">
              <h5>{this.state.pokemonIndex}</h5>
            </div>
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
          </Cards>

        </StyleLink>
      </div>
    )
  }
}
