import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';

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
