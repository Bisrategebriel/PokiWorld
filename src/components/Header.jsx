import React from 'react'

import pokemon from '../pokemon.png';

const Header = () => {
  return (
    <div>
      {/* <h1>The Poki World</h1> */}
      <img src={pokemon} alt="title" className='pokeTitle' />
    </div>
  )
}

export default Header