import React, { useState } from 'react';

import { useTestDispatch, useTestState } from '../../hooks/test';

import './styles.scss';

export const Test = () => {

  const [pokemonName, setPokemonName] = useState('pikachu');
  const { loadPokemon } = useTestDispatch();
  const test = useTestState();

  return (
    <div className="layout">
      <div className="title">TEST</div>
      <div className="input">
        <input value={pokemonName} onChange={(event) => setPokemonName(event.target.value.toLowerCase())}/>
      </div>
      <div className="button">
        <button onClick={loadPokemon(pokemonName)}>GET POKEMON</button>
      </div>
      <div className="stats">
        {test?.[pokemonName]?.stats?.map(((stat, index) => (
          <div className="stat" key={stat.stat.name + '_' + index}>
            <div>{stat.stat.name}:</div>
            <div>{stat.base_stat}</div>
          </div>
        ))) || 'Pokemon not found'}
      </div>
    </div>
  );
};
