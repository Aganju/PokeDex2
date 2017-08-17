import React from 'react';
import { selectItems } from '../../reducers/selectors';
import ItemDetail from './item_detail';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.pokemonId !== newProps.match.params.pokemonId) {
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }
  }

  render() {
    if (this.props.pokemon) {

      const moves = this.props.pokemon.moves.map((move, idx) => {
        return <li key={idx}>{ move }</li>;
      });

      const items = this.props.items.map((item, idx) => {
        return <li
          key={idx}
          className="item-item">
          <img src={ item.image_url } />
        </li>;
      });

      return (
        <div id="pokemon-detail">
          <img className="poke-img" src={ this.props.pokemon.image_url } />
          <h1>{ this.props.pokemon.name }</h1>
          <p>Type: { this.props.pokemon.poke_type }</p>
          <p>Attack: { this.props.pokemon.attack }</p>
          <p>Defense: { this.props.pokemon.defense }</p>
          <ul>Moves: { moves }</ul>
          <ul className="items">{ items }</ul>
        </div>
      );
  } else {
    return null;
  }
}
}

export default PokemonDetail;
