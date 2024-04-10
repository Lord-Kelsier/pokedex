import { styled } from 'styled-components';
import { useFetch } from '../../services/useFetch';
const StatSpan = styled.span`
  color: white;
  font-weight: 500;
  & :last-child {
    color: black;
    font-size: 120%;
  }
`;
interface PokeInfoGeneralStatsProps {
  weight: number;
  height: number;
  className?: string;
  pokeName: string | undefined;
  ability: string;
}

type LanguageType = {
  name: string;
  url: string;
};
type GenerationType = {
  genus: string;
  language: LanguageType;
};
function findGenus(genera: Array<GenerationType>) {
  const englishEntries = genera.filter((genera) => genera.language.name === 'es');
  return englishEntries[0].genus;
}
export default function PokeInfoGeneralStats({
  className,
  weight,
  height,
  pokeName,
  ability,
}: PokeInfoGeneralStatsProps) {
  const url = `https://pokeapi.co/api/v2/pokemon-species/${pokeName}`;
  const { data } = pokeName !== undefined ? useFetch(url) : { data: null };
  const category = data !== null ? findGenus(data.genera) : 'None';
  return (
    <div className={className}>
      <StatSpan>
        <p>Altura</p>
        <p>{height / 10} m</p>
      </StatSpan>
      <StatSpan>
        <p>Peso</p>
        <p>{weight / 10} Kg</p>
      </StatSpan>
      <StatSpan>
        <p>Categoria</p>
        <p>{category}</p>
      </StatSpan>
      <StatSpan>
        <p>Habilidad</p>
        <p>{ability}</p>
      </StatSpan>
    </div>
  );
}
