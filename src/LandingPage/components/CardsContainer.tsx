import React, { useState, useEffect } from 'react';
import { PokeContainer } from './CardStyles';

import PokeCard from './PokeCard';

interface PokemonPreRequestInfo {
  url: string;
  name: string;
}

function CardsContainer() {

  const [pokemons, setPokemons] = useState(Array<PokemonPreRequestInfo>);
  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setPokemons(data.results);
      });
  }, []);

  return (
    <PokeContainer>
      {pokemons?.map((pokemon, index) => (
        <PokeCard key={index} pokeUrl={pokemon.url} name={pokemon.name} />
      ))}
    </PokeContainer>
  );
}

export default CardsContainer;
