import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';

export const requestAllPokemon = () => {
  return (dispatch) => {
    return APIUtil.fetchAllPokemon().then((allPokemon) => {
      dispatch(receiveAllPokemon(allPokemon));
    });
  };
};

export const receiveAllPokemon = (allPokemon) => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon: allPokemon
  };
};

export const requestSinglePokemon = (id) => {
  return (dispatch) => {
    return APIUtil.fetchPokemon(id).then((payload) => {
      dispatch(receiveSinglePokemon(payload));
    });
  };
};

export const receiveSinglePokemon = (payload) => {
  return {
    type: RECEIVE_POKEMON,
    pokemon: payload.pokemon,
    items: payload.items
  };
};
