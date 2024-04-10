import {
  CardBox,
  PokeId,
  PokeImage,
  PokeName,
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
      <PokeId>{`N° XXXX`}</PokeId>
      <PokeName>Not Found</PokeName>
      <PokeTypeContainer>
        <PokeType key={1} type="normal">
          Unexistent
        </PokeType>
      </PokeTypeContainer>
    </CardBox>
  );
}
