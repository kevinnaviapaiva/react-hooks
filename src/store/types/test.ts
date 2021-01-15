export const REPLACE_POKEMON = 'REPLACE_POKEMON';

interface PokemonStat {
  base_stat: number,
  effort: number,
  stat: {
    name: string,
    url: string
  }
}

export interface PokemonData {
  stats: PokemonStat[]
}

export interface TestState {
  [key: string]: PokemonData
}

interface ReplacePokemonAction {
  type: typeof REPLACE_POKEMON,
  name: string,
  data: PokemonData,
}

export type TestActionTypes = ReplacePokemonAction;
