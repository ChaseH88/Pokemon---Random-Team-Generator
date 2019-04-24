import React, { Component, Fragment } from "react";


// Components
import Pokecard from './Pokecard';

// Return a random number
function getRandom(){
  return Math.floor(Math.random() * 494);
}

class Pokemon extends Component {
  render(){
    return(
      <Fragment>
        <h1>Pokemon - Random Team Generator</h1>
        <div id="pokemon">
          <Pokecard id={getRandom()} />
          <Pokecard id={getRandom()} />
          <Pokecard id={getRandom()} />
          <Pokecard id={getRandom()} />
          <Pokecard id={getRandom()} />
          <Pokecard id={getRandom()} />
        </div>
      </Fragment>
    )
  }
}

export default Pokemon;