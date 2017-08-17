import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

export default (state = {}, action) =>{
  switch (action.type) {
    case RECEIVE_POKEMON:
      return Object.assign({}, state, { pokeDisplay: action.pokemon.id });
    default:
      return state;

  }
};
