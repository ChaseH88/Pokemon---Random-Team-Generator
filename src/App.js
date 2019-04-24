import React from 'react';
import './App.css';

// Components
import Pokemon from './components/Pokemon';

//POKEMON API
//https://pokeapi.co/api/v2/pokemon/${num}/

//ANIMATED GIFS
//https://raw.githubusercontent.com/tdmalone/pokecss-media/master/graphics/pokemon/ani-front/${pokemonName}.gif

function App() {
  return (
    <div className="App">
      <Pokemon />
    </div>
  );
}

export default App;
