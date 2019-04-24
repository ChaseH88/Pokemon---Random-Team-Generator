import React, { Component } from "react";
import axios from "axios";

const POKE_API = "https://pokeapi.co/api/v2/pokemon/"

class Pokecard extends Component {
  
  state = {
    name: "",
    exp: "",
    height: "",
    weight: "",
    image: "",
    type: []
  }

  capitalizeFirst = (name) => {
    let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    return capitalizedName
  }

  getTypes = (type) => {
    let types = []
    type.forEach((t) => {
      types.push(t.type.name);
    });
    types = types.toString().replace(/,/g, '/');
    return types;
  };

  convertWeight = (w) => {
    let weight = w / 4.536
    return weight.toFixed(2);
  }

  convertHeight = (h) => {
    let height = h / 3.048
    let feet = Math.floor(height);
    let inches = Math.round((height - feet) * 12);
    let result = `${feet} ft. ${inches} in.`;
    return result;
  }

  componentWillMount(){
    const { id } = this.props;
    let pokemonURL = `${POKE_API}${id}`
    // Call the API
    const getData = async () => {
      try {
          const res = await axios.get(pokemonURL);
          const { data } = res;
          return data;
      } catch (err) {
          console.error(err);
      }
    };
    const pokemon = getData();
    // Resolve
      pokemon.then((details) => {
        this.setState({
          name: this.capitalizeFirst(details.name),
          exp: details.base_experience,
          height: this.convertHeight(details.height),
          weight: this.convertWeight(details.weight),
          image: details.sprites.front_default,
          type: this.getTypes(details.types)
        });
    });
  }

  render(){
    return(
      <div className="pokecard">
        <div className="card">
          <h2>{this.state.name}</h2>
          <img src={this.state.image} alt={this.state.name} />
          <p><strong>Type: {this.state.type}</strong> </p>
          <p><strong>Exp: {this.state.exp}</strong> </p>
          <p>Height: {this.state.height}</p>
          <p>Weight: {this.state.weight} lbs.</p>
        </div>
      </div>
    )
  }
}

export default Pokecard;