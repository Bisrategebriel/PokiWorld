import React from 'react';

import legendPokemon from '../legend-pokemon.png';
import '../App.css';

const Card = () => {
  return (
    <div className='card'>
      <div className="pokemons">
        <img className='pokeStyle' src={legendPokemon} alt="pokemons" />
        <p className='pokemonType'>Pikachu Pokemon</p>
        <p><b>Ability </b>: Special-Attack</p>
        <p><b>Height </b>: 159cm </p>
        <p><b>Weight </b>: 100Kg </p>
      </div>
    </div>
  )
}

export default Card