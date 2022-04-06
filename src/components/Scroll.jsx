import React, { Component } from 'react'
import { Children } from 'react/cjs/react.production.min'

import SearchPokemon from './SearchPokemon'

class Scroll extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       first: 'first'
    }
  }
  render() {
    return (
      <div>
        <SearchPokemon />
        <div className="scroll-view">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Scroll