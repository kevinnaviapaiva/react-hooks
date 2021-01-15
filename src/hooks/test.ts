import { useDispatch, useSelector } from 'react-redux';

import { loadPokemon } from '../store/actions';
import { RootState } from '../store/reducers';

export const useTestState = () => {
  return useSelector((state: RootState) => state.test);
};

export const useTestDispatch = () => {
  const dispatch = useDispatch();
  return {
    loadPokemon: (pokemonName: string) => () => dispatch(loadPokemon(pokemonName)),
  };
};
