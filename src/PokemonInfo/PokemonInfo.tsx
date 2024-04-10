import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

import capitalize from '../services/pokeApiUtils/capitalize';
import { PokeImage } from '../shared/poke-styles/pokeStyles';
import PokeInfoHeader from './components/PokeInfoHeader';
import {
  PokeImageBaseStatsSection,
  PokeInfoContainer,
  PokeInfoSection,
  PokeStatsSection,
  PokeStatsStyled,
} from './components/styled-poke-components/InfoStyles';
import PokeInfoBaseStats from './components/PokeInfoBaseStats';
import PokeInfoDescription from './components/PokeInfoDescription';
import { useContext } from 'react';
import { PaginationContext } from '../paginationContext';

interface PokemonData {
  id: number;
}
interface PokemonInfoProps {
  pokemonData: PokemonData;
}

export default function PokemonInfo() {
  const { pokeName } = useParams();
  const { pokemonData } = useContext(PaginationContext);
  const name = pokeName !== undefined ? capitalize(pokeName) : 'Not found';
  const pokemonId = pokemonData.id;
  const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

  return (
    <>
      <PokeInfoHeader name={name} id={pokemonId} />
      <PokeInfoSection>
        <PokeInfoContainer>
          <PokeImageBaseStatsSection>
            <PokeImage src={pokemonImageUrl} />
            <PokeInfoBaseStats />
          </PokeImageBaseStatsSection>
          <PokeStatsSection>
            <PokeInfoDescription pokeId={pokemonData.id} />
            <PokeStatsStyled />
          </PokeStatsSection>
        </PokeInfoContainer>
      </PokeInfoSection>
    </>
  );
}
