import React, { useState } from 'react';
import styled from 'styled-components';

import PokeCard from './PokeCard';

const Container = styled.ul`
  margin: 0 auto;
  width: 855px;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  background: #fff;
`;

function CardsContainer() {
  const [pokemons, setPokemons] = useState([]);
  const getPokemons = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0';
    const response = await fetch(url);
    const pokemons = await response.json();
    setPokemons(pokemons);
  };
  getPokemons();

  return (
    <Container>
      {pokemons.map((pokemon) => {
        <PokeCard
          id={pokemon.id}
          name={pokemon.name}
          imgUrl={pokemon.url}
          types={pokemon.types}
        />;
      })}
    </Container>
  );
}

export default CardsContainer;
