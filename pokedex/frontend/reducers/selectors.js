import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  return values(state.entities.pokemon);
};

export const selectItems = (state) => {
  return state.entities.pokemon[state.ui.pokeDisplay].item_ids.map((itemId) => {
    return state.entities.items[itemId];
  });
};
