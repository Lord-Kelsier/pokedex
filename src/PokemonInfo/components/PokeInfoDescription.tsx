import { useFetch } from '../../services/useFetch';
interface PokeInfoDescriptionProps {
  className?: string;
  pokeId: number;
}

const fixDescriptionText = (text: string) => {
  if (text.includes('')) {
    return text.replaceAll('', ' ');
  }
  return text;
};

export default function PokeInfoDescription({
  className,
  pokeId,
}: PokeInfoDescriptionProps) {
  const pokeUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokeId}`;
  const { data } = useFetch(pokeUrl);
  const description: string = fixDescriptionText(
    data !== null ? data.flavor_text_entries[0].flavor_text : '',
  );
  return <div className={className}>{description}</div>;
}
