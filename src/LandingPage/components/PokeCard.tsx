import capitalize from '../../services/pokeApiUtils/capitalize';
import { defaultPokeIdParser } from '../../services/pokeApiUtils/parseId';
import { useFetch } from '../../services/useFetch';
import { NonDecoratedLink } from '../../shared/general-styled-components/Link';
import { PokeId, PokeImage, PokeName } from '../../shared/poke-styles/pokeStyles';
import { DefaultPokemon } from './defaultPokemon';
import {
  CardBox,
  PokeType,
  PokeTypeContainer,
} from './styled-poke-components/CardStyles';

interface PokeCardArgument {
  pokeUrl: string;
  name: string;
}
interface PokemonTypeResponse {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

function PokeCard({ pokeUrl, name }: PokeCardArgument) {
  const { data } = useFetch(pokeUrl);
  if (data === null) {
    return <DefaultPokemon />;
  }
  const pokemonId = data.id;
  const pokemonImageUrl = data.sprites.other['official-artwork']['front_default'];
  const pokemonTypes = data.types.map(
    (pokemonType: PokemonTypeResponse) => pokemonType.type.name,
  );
  const getTypes = () =>
    pokemonTypes.map((type: string, index: number) => (
      <PokeType key={index} type={type}>
        {type}
      </PokeType>
    ));
  return (
    <CardBox>
      <NonDecoratedLink to={`pokemon/${name}`}>
        <PokeImage src={pokemonImageUrl} alt={`${name} image`} />
        <PokeId $weight="bold" $size="80%">{`N° ${defaultPokeIdParser(
          pokemonId,
        )}`}</PokeId>
        <PokeName $weight="500" $size="150%">
          {capitalize(name)}
        </PokeName>
        <PokeTypeContainer>{getTypes()}</PokeTypeContainer>
      </NonDecoratedLink>
    </CardBox>
  );
}

export default PokeCard;
