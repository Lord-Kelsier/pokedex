import { PokeContainer } from './styled-components/CardStyles';
import { useFetch } from '../../services/useFetch';

import PokeCard from './PokeCard';

interface PokemonPreRequestInfo {
  url: string;
  name: string;
}

function CardsContainer() {
  const { data } = useFetch('https://pokeapi.co/api/v2/pokemon?limit=15&offset=0');

  return (
    <PokeContainer>
      {data?.results.map((pokemon: PokemonPreRequestInfo, index: number) => (
        <PokeCard key={index} pokeUrl={pokemon.url} name={pokemon.name} />
      ))}
    </PokeContainer>
  );
}

export default CardsContainer;
