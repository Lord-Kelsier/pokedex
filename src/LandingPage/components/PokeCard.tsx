import {
  CardBox,
  PokeImage,
  PokeId,
  PokeName,
  PokeTypeContainer,
  PokeType,
} from './CardStyles';
import { useState, useEffect } from 'react';

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
  const [pokemonInfo, setPokemonInfo] = useState({
    id: 0,
    imgUrl: '#',
    types: [],
  });
  useEffect(() => {
    fetch(pokeUrl)
      .then((response) => response.json())
      .catch((reject) => console.log(reject))
      .then((pokeData) => {
        if (pokeData === undefined) {
          console.log('Failed to connect to the API');
          return;
        }
        setPokemonInfo({
          id: pokeData.id,
          imgUrl: pokeData.sprites['other']['official-artwork']['front_default'],
          types: pokeData.types.map(
            (pokemonType: PokemonTypeResponse) => pokemonType.type.name,
          ),
        });
      });
  }, []);
  const idZeroFilled = ('0000' + pokemonInfo.id).slice(-4);
  const firstLetter = name[0];
  const remainingLetters = name.slice(1);
  const capitalizedName = firstLetter.toLocaleUpperCase() + remainingLetters;
  const getTypes = () =>
    pokemonInfo.types.map((type) => <PokeType type={type}>{type}</PokeType>);
  return (
    <CardBox>
      <PokeImage src={pokemonInfo.imgUrl} alt={`${name} image`} />
      <PokeId>{`N° ${idZeroFilled}`}</PokeId>
      <PokeName>{capitalizedName}</PokeName>
      <PokeTypeContainer>{getTypes()}</PokeTypeContainer>
    </CardBox>
  );
}

export default PokeCard;
