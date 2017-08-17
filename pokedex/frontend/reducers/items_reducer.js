import { RECEIVE_POKEMON } from '../actions/pokemon_actions';

export default (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_POKEMON:
      return Object.assign({}, state, action.items);
    default:
      return state;
  }
};
