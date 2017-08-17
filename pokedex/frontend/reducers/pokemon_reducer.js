import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { RECEIVE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({}, state, action.pokemon);
    case RECEIVE_POKEMON:
      return merge({}, state, { [action.pokemon.id]: action.pokemon });
    default:
      return state;
  }
};
