import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Pokedex = () => {
  const userName = useSelector((state) => state.userName);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/`)
      .then((res) => setPokemon(res.data.results));
  }, []);
  console.log(pokemon);
  return (
    <div>
      <h1>POKEDEX</h1>
      <p>welcome {userName}</p>
      <ul className="pokemon-card">
        {pokemon.map((pokemon) =>(
          <li key={pokemon.url}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pokedex;
