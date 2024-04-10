import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import capitalize from '../services/pokeApiUtils/capitalize';
import { useFetch } from '../services/useFetch';
import { PokeImage } from '../shared/poke-styles/pokeStyles';
import Colors from '../shared/theme';
import PokeInfoHeader from './components/PokeInfoHeader';
import {
  BaseStats,
  PokeImageBaseStatsSection,
  PokeInfoContainer,
  PokeInfoSection,
  PokeStatsSection,
} from './components/styled-poke-components/InfoStyles';

import { NonDecoratedLink } from '../shared/general-styled-components/Link';

const fixDescriptionText = (text: string) => {
  if (text.includes('')) {
    return text.replaceAll('', ' ');
  }
  return text;
};

const PokeDescriptionText = styled.p`
  padding: 5px;
`;

const PokeStats = styled.article`
  background-color: ${Colors.pokeStatsBackground};
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  height: 300px;
`;
export default function PokemonInfo() {
  const { pokeName } = useParams();
  const pokeUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokeName}`;
  const { data } = useFetch(pokeUrl);
  const name = pokeName !== undefined ? capitalize(pokeName) : 'Not found';
  const pokemonId = data === null ? 132 : data.id; // ditto id (132) in case pokemon not found
  const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
  const description: string = fixDescriptionText(
    data !== null ? data.flavor_text_entries[0].flavor_text : '',
  );
  return (
    <>
      <PokeInfoHeader name={name} id={pokemonId} />
      <PokeInfoSection>
        <PokeInfoContainer>
          <PokeImageBaseStatsSection>
            <PokeImage src={pokemonImageUrl} />
            <BaseStats />
          </PokeImageBaseStatsSection>
          <PokeStatsSection>
            <PokeDescriptionText>{description}</PokeDescriptionText>
            <PokeStats>a</PokeStats>
          </PokeStatsSection>
        </PokeInfoContainer>
        <NonDecoratedLink to="/" preventScrollReset={false}>
          back
        </NonDecoratedLink>
      </PokeInfoSection>
    </>
  );
}
