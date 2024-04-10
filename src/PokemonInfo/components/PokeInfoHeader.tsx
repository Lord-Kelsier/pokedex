import { defaultPokeIdParser } from '../../services/pokeApiUtils/parseId';
import { PokeId, PokeName } from '../../shared/poke-styles/pokeStyles';
import { HeaderContainer, TitleContainer } from './styled-poke-components/InfoStyles';

interface PokeInfoHeaderProps {
  name: string;
  id: number | undefined;
}
export default function PokeInfoHeader({ name, id }: PokeInfoHeaderProps) {
  return (
    <HeaderContainer>
      <TitleContainer>
        <PokeName weight="500" size="150%">
          {name}
        </PokeName>
        <PokeId weight="bold" size="150%">
          N° {defaultPokeIdParser(id)}
        </PokeId>
      </TitleContainer>
    </HeaderContainer>
  );
}
