import { PokeContainer, ButtonLoadMore } from './styled-poke-components/ContainerStyles';
import { useFetch } from '../../services/useFetch';
import { useEffect, useState } from 'react';
import { parseFetch } from '../../services/parseFetch';

import PokeCard from './PokeCard';

interface PokemonPreRequestInfo {
  url: string;
  name: string;
}

function CardsContainer() {
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0';
  const [nextUrl, setNextUrl] = useState(initialUrl);
  const { data, setData } = useFetch(initialUrl);
  useEffect(() => {
    if (data !== null) {
      setNextUrl(data.next);
    }
  }, [data]);
  const handleLoadMorePokemons = async () => {
    const newData = await parseFetch(nextUrl);
    setNextUrl(newData.next);
    setData({
      count: newData.count,
      next: newData.next,
      previous: newData.previous,
      results: data.results.concat(newData.results),
    });
  };
  return (
    <PokeContainer>
      {data?.results.map((pokemon: PokemonPreRequestInfo, index: number) => (
        <PokeCard key={index} pokeUrl={pokemon.url} name={pokemon.name} />
      ))}
      <ButtonLoadMore onClick={handleLoadMorePokemons}>Load more Pokemons</ButtonLoadMore>
    </PokeContainer>
  );
}

export default CardsContainer;
