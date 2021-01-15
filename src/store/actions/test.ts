import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { REPLACE_POKEMON, TestActionTypes, PokemonData } from '../types';
import { getRequest } from '../../config/httpClient';
import { SERVER } from '../../config/serverConfig';
import { RootState } from '../reducers';

export const replacePokemon = (pokemonName: string, pokemonData: PokemonData): TestActionTypes => {
  return {
    type: REPLACE_POKEMON,
    name: pokemonName,
    data: pokemonData,
  }
}

export const loadPokemon = (pokemonName: string): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch) => {
    const response = await getRequest(SERVER.GET_POKEMON(pokemonName));
    dispatch(replacePokemon(pokemonName, response));
  }
}
