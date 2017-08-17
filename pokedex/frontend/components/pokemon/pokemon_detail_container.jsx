import React from 'react';
import { connect } from 'react-redux';
import { selectItems } from '../../reducers/selectors';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state) => {
  let items = [];

  if (state.ui.pokeDisplay && state.entities.pokemon[state.ui.pokeDisplay].item_ids) {
    items = selectItems(state);
  }

  return {
    pokemon: state.entities.pokemon[state.ui.pokeDisplay],
    items: items
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSinglePokemon: (pokemonId) => dispatch(requestSinglePokemon(pokemonId))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
