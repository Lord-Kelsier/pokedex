import { useContext, useEffect, useState } from 'react';

import { PaginationContext } from '../../paginationContext';
import { parseFetch } from '../../services/parseFetch';
import { useFetch, useFetchWithPaginationContext } from '../../services/useFetch';
import PokeCard from './PokeCard';
import { ButtonLoadMore, PokeContainer } from './styled-poke-components/ContainerStyles';

interface PokemonPreRequestInfo {
  url: string;
  name: string;
}

function CardsContainer() {
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0';
  const [nextUrl, setNextUrl] = useState(initialUrl);
  const { pageData, setPageData } = useContext(PaginationContext);
  useFetchWithPaginationContext(initialUrl);
  useEffect(() => {
    if (pageData !== null && pageData.next !== null) {
      setNextUrl(pageData.next);
    }
  }, [pageData]);
  const handleLoadMorePokemons = async () => {
    const newData = await parseFetch(nextUrl);
    setNextUrl(newData.next);
    setPageData({
      count: newData.count,
      next: newData.next,
      previous: newData.previous,
      results: pageData !== null ? pageData.results.concat(newData.results) : [],
    });
  };
  return (
    <PokeContainer>
      {pageData?.results.map((pokemon: PokemonPreRequestInfo, index: number) => (
        <PokeCard key={index} pokeUrl={pokemon.url} name={pokemon.name} />
      ))}
      <ButtonLoadMore onClick={handleLoadMorePokemons}>Load more Pokemons</ButtonLoadMore>
    </PokeContainer>
  );
}

export default CardsContainer;
