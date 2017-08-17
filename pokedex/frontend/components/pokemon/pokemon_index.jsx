import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const allPokemon = this.props.pokemon.map( poke => {
      return (
        <PokemonIndexItem
          key={ poke.id }
          poke={ poke }
        />
      );
    });

    return (
      <aside>
        <ul>{ allPokemon }</ul>
      </aside>
    );
  }
}

export default PokemonIndex;
