import { useFetch } from '../../services/useFetch';
import { NonDecoratedLink } from '../../shared/shared-styled-components/Link';
import { DefaultPokemon } from './defaultPokemon';
import {
  CardBox,
  PokeId,
  PokeImage,
  PokeName,
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
  const idZeroFilled = ('0000' + pokemonId).slice(-4);
  const firstLetter = name[0];
  const remainingLetters = name.slice(1);
  const capitalizedName = firstLetter.toLocaleUpperCase() + remainingLetters;
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
        <PokeId>{`N° ${idZeroFilled}`}</PokeId>
        <PokeName>{capitalizedName}</PokeName>
        <PokeTypeContainer>{getTypes()}</PokeTypeContainer>
      </NonDecoratedLink>
    </CardBox>
  );
}

export default PokeCard;
