import { REPLACE_POKEMON, TestActionTypes, TestState } from '../types';

const initialState = {};

export const testReducer = (state: TestState = initialState, action: TestActionTypes) => {
  const newState = { ...state };
  switch (action.type) {
    case REPLACE_POKEMON:
      newState[action.name] = action.data;
      return newState;
    default:
      return state;
  }
};
