import { PokeContainer, ButtonLoadMore } from './styled-poke-components/ContainerStyles';
import { useFetch } from '../../services/useFetch';
import { useEffect, useState } from 'react';

import PokeCard from './PokeCard';

interface PokemonPreRequestInfo {
  url: string;
  name: string;
}

function CardsContainer() {
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon?limit=15&offset=0';
  const [nextUrl, setNextUrl] = useState(initialUrl);
  const { data } = useFetch(initialUrl);
  useEffect(() => {
    if (data !== null) {
      setNextUrl(data.next);
    }
  }, [data]);

  return (
    <PokeContainer>
      {data?.results.map((pokemon: PokemonPreRequestInfo, index: number) => (
        <PokeCard key={index} pokeUrl={pokemon.url} name={pokemon.name} />
      ))}
      <ButtonLoadMore>Load More</ButtonLoadMore>
    </PokeContainer>
  );
}

export default CardsContainer;
