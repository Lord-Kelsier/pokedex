import { PokeId, PokeImage, PokeName } from '../../shared/poke-styles/pokeStyles';
import {
  CardBox,
  PokeType,
  PokeTypeContainer,
} from './styled-poke-components/CardStyles';
export function DefaultPokemon() {
  return (
    <CardBox>
      <PokeImage
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png"
        alt="Pokemon no encontrado"
      />
      <PokeId $weight="bold" $size="80%">{`N° XXXX`}</PokeId>
      <PokeName $weight="bold" $size="150%">
        Not Found
      </PokeName>
      <PokeTypeContainer>
        <PokeType key={1} type="normal">
          Unexistent
        </PokeType>
      </PokeTypeContainer>
    </CardBox>
  );
}
