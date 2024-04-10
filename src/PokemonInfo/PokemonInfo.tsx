import { useParams } from 'react-router-dom';

import capitalize from '../services/pokeApiUtils/capitalize';
import { defaultPokeIdParser } from '../services/pokeApiUtils/parseId';
import { useFetch } from '../services/useFetch';
import {
  HeaderContainer,
  PokeId,
  PokeName,
  TitleContainer,
} from './components/styled-poke-components/InfoStyles';
export default function PokemonInfo() {
  const { pokeName } = useParams();
  const pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
  const { data } = useFetch(pokeUrl);
  const name = pokeName !== undefined ? capitalize(pokeName) : 'Not found';
  return (
    <>
      <HeaderContainer>
        <TitleContainer>
          <PokeName>{name}</PokeName>
          <PokeId>N° {defaultPokeIdParser(data?.id)}</PokeId>
        </TitleContainer>
      </HeaderContainer>
      <h1>{pokeName} </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum deleniti in optio,
        eos asperiores aut? Tempora repellat commodi pariatur illo.
      </p>
    </>
  );
}
