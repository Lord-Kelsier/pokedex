import { useParams } from 'react-router-dom';

import capitalize from '../services/pokeApiUtils/capitalize';
import { useFetch } from '../services/useFetch';
import { PokeImage } from '../shared/poke-styles/pokeStyles';
import PokeInfoHeader from './components/PokeInfoHeader';
import {
  PokeBaseStatsStyled,
  PokeDescriptionStyled,
  PokeImageBaseStatsSection,
  PokeInfoContainer,
  PokeInfoSection,
  PokeStatsSection,
  PokeStatsStyled,
  BackToPokedexBtn,
} from './components/styled-poke-components/InfoStyles';
import { NonDecoratedLink } from '../shared/general-styled-components/Link';

export default function PokemonInfo() {
  const { pokeName } = useParams();
  const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
  const name = pokeName !== undefined ? capitalize(pokeName) : 'Not found';
  const pokemonId = data !== null ? data.id : 132; // ditto id
  const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
  const ability = data !== null ? data.abilities[0].ability.name : '';
  return (
    <>
      <PokeInfoHeader name={name} id={pokemonId} />
      <PokeInfoSection>
        <PokeInfoContainer>
          <PokeImageBaseStatsSection>
            <PokeImage src={pokemonImageUrl} />
            <PokeBaseStatsStyled baseStats={data?.stats} />
          </PokeImageBaseStatsSection>
          <PokeStatsSection>
            <PokeDescriptionStyled pokeId={pokemonId} />
            <PokeStatsStyled
              weight={data?.weight}
              height={data?.height}
              pokeName={pokeName}
              ability={capitalize(ability)}
            />
            <NonDecoratedLink to="/">
              <BackToPokedexBtn>Volver a lista de Pokemones</BackToPokedexBtn>
            </NonDecoratedLink>
          </PokeStatsSection>
        </PokeInfoContainer>
      </PokeInfoSection>
    </>
  );
}
